'use client'

import { useTransition, useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { isEmpty, get, pick } from 'lodash-es'
import Image from 'next/image'
import { UploadButton } from '@/lib/uploadthing';
import { type UploadFileResponse } from 'uploadthing/next';
import { X } from "lucide-react"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"

import { deleteUploadedFile } from '@/lib/actions'
import { createKennelWithProfileAction, sampleDelayedServerAction } from '@/lib/actions'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { isDeepEmpty } from '@/lib/utils'

import {
    KennelCreateInputSchema as InputSchema
} from '@/prisma/generated/zod'

type InputsType = z.infer<typeof InputSchema>

const defaultValues: InputsType = {
    name: '',
    nameEn: '',
    description: '',
    Profile: {
        create: {
            mobile: '',
            instagram: '',
            facebook: '',
            wechat: '',
        }
    },
}

export default function Page() {
    const { toast } = useToast()

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // upload img
    const [uploadedImg, setUploadedImg] = useState<UploadFileResponse>({})

    const hookedForm = useForm<InputsType>({
        defaultValues,
        resolver: zodResolver(InputSchema),
    })

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting },
        reset,
    } = hookedForm

    const [isPending, startTransition] = useTransition();

    // https://scastiel.dev/server-components-actions-react-nextjs
    // https://github.com/orgs/react-hook-form/discussions/10757
    const onSubmit: SubmitHandler<InputsType> = (data) => {
        startTransition(async () => {
            // 融合上传图片的数据

            if (!isEmpty(uploadedImg)) data.img = {
                create: pick(uploadedImg, ['key', 'url', 'name', 'size'])
            }

            const { created, kennel, error } = await createKennelWithProfileAction(data)
            console.log('created!!!!!!!!', created, kennel, error)
            if (created === 'ok') {
                // TODO: revalidate the path to clear cache
                // revalidatePath('/')
                toast({
                    title: "创建成功",
                    description: "犬舍名为：" + kennel?.name,
                })
            } else {
                toast({
                    title: "创建失败",
                    description: error,
                })
            }

        });
    };

    // use this to reset the form after submission succeeds
    useEffect(() => {
        if (!isEmpty(errors) || !isSubmitSuccessful) { return }
        setIsDialogOpen(false)
        setUploadedImg({})
        reset(defaultValues)
    }, [isSubmitSuccessful])

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div>
            <p>{JSON.stringify(
                { errors, isSubmitSuccessful, isSubmitting }
            )}</p>
            <Form {...hookedForm}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex gap-8">
                        <div id="left" className="flex-1 space-y-8">
                            <FormField
                                control={control}
                                name="name"
                                render={({ field }) => {
                                    // console.log('field', field)
                                    return (
                                        <FormItem>
                                            <FormLabel>名称 *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="输入犬舍名称.." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={control}
                                name="nameEn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>犬舍英文名</FormLabel>
                                        <FormControl>
                                            {/* @ts-ignore */}
                                            <Input placeholder="可选英文名" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="写下你的犬舍介绍.."
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            目前用户端没有展示
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="Profile.create.mobile"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>电话</FormLabel>
                                        <FormControl>
                                            <Input placeholder="电话号码.." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="Profile.create.instagram"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>instagram</FormLabel>
                                        <FormControl>
                                            <Input placeholder="instagram用户名.." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            {field.value && `https://www.instagram.com/${field.value}`}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="Profile.create.facebook"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>facebook</FormLabel>
                                        <FormControl>
                                            <Input placeholder="facebook用户名.." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            {field.value && `https://www.facebook.com/${field.value}`}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="Profile.create.wechat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>微信</FormLabel>
                                        <FormControl>
                                            <Input placeholder="wechat.." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div id="right" className="flex flex-col items-center gap-4 ">
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                {(!isEmpty(uploadedImg)) ? (
                                    <DialogTrigger>
                                        <div className="flex group pt-4 relative">
                                            <X className="absolute -right-2 top-2 text-slate-600/0 group-hover:text-slate-600/90 transition-all" size={20} />
                                            <Avatar className='w-[80px] h-[80px] ring-2 ring-slate-200'>
                                                <AvatarImage src={uploadedImg?.url || '/img/male-avatar.svg'} alt="avatar" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </DialogTrigger>
                                ) : (
                                    <div className="flex group pt-4 relative">
                                        <Avatar className='w-[80px] h-[80px] ring-2 ring-slate-200'>
                                            <AvatarImage src='/img/male-avatar.svg' alt="avatar" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                )}
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>确认删除已经上传的图片吗？</DialogTitle>
                                        <DialogDescription>
                                            <div className="flex w-full justify-end mt-8">
                                                <Button onClick={async (e) => {
                                                    e.preventDefault()
                                                    console.log('uploadedImg?.name', uploadedImg)
                                                    await deleteUploadedFile(uploadedImg)
                                                    setUploadedImg({})
                                                    setIsDialogOpen(false)

                                                }}>确认</Button>
                                            </div>

                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(res: UploadFileResponse) => {
                                    setUploadedImg(get(res, '0', {}))
                                    console.log({
                                        title: "上传成功",
                                        res,
                                    })
                                }}
                                onUploadError={(error: Error) => {
                                    console.error({
                                        title: "上传失败",
                                        error: error.message,
                                    })
                                }}
                                content={{
                                    button({ ready }) {
                                        if (ready) return '上传文件';

                                        return "Getting ready...";
                                    },
                                    allowedContent({ ready, fileTypes, isUploading }) {
                                        if (!ready) return "文件不符合要求";
                                        if (isUploading) return "上传中..";
                                        return '你可以上传最大4MB的图片';
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <Button
                        // disabled={!isEmpty(errors)}
                        type="submit"
                    >
                        {
                            isSubmitting ? '提交中...' : '提交'
                        }</Button>
                </form>

            </Form>
        </div >
    )
}