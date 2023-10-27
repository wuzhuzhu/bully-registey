'use client'
import z from 'zod'
import { UploadButton } from '@/lib/uploadthing'
import { get, isEmpty, pick } from 'lodash-es'
import { X } from "lucide-react"
import { useEffect, useState, useTransition } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { type UploadFileResponse } from 'uploadthing/next'
import { omit } from 'lodash-es'
import { usePathname, useRouter } from 'next/navigation'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/components/ui/use-toast"
import { createOrUpdateKennelWithProfileAction, deleteUploadedKennelImg } from '@/lib/actions'
import { isDeepEmpty } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"

import type { Prisma } from '@prisma/client'
import {
    ProfileCreateWithoutKennelInputSchema, // 用以合并扁平的profile字段
    KennelOptionalDefaultsSchema, // 没有关联关系，且自动字段为可选的schema，手动合并profile字段
    KennelCreateOrConnectWithoutPetsInputSchema // 最终的输出到action的结构，在这个页面创建kennel只不创建pets
} from '@/prisma/generated/zod'
import type { KennelOptionalDefaults } from '@/prisma/generated/zod'
// import { KennelCreateActionSchema, revalidatePathByPathname } from '@/lib/actions'

// 表单输入结构为扁平的object类型声明
type InputType = KennelOptionalDefaults & {
    profile?: Nullable<Prisma.ProfileCreateWithoutKennelInput>
}
// 表单输入结构为扁平的object
// 赋予可空内容可选属性
const InputSchema = z.object({
    ...KennelOptionalDefaultsSchema.shape,
    nameEn: KennelOptionalDefaultsSchema.shape.nameEn.optional(),
    description: KennelOptionalDefaultsSchema.shape.nameEn.optional(),
})
    .merge(z.object({
        profile: ProfileCreateWithoutKennelInputSchema
    }))

function omitKennelDirty(kennel) {
    return omit(kennel, ['profile.kennelId', 'profile.userId'])
}

// 为了最大程度复用server action，提交给server action前，整理结构为prisma的结构，并且区分创建/更新

// TODO: handle the profile fields, just migrate the schema, maybe needs new seed data

export default function Page({ kennel: kennelDirty }: {
    kennel?: Nullable<InputType>
}) {
    const router = useRouter()
    const { toast } = useToast()
    const pathname = usePathname()

    const kennel = omitKennelDirty(kennelDirty)
    const defaultValues: InputType = kennelDirty?.id
        ? kennel // 更新，使用清理过的数据
        : { // 创建，使用默认值
            name: '',
            nameEn: '',
            description: '',
            profile: {
                mobile: '',
                instagram: '',
                facebook: '',
                wechat: '',
                email: ''
            }
        }
    // console.log({ defaultValues, kennel })

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // upload img
    const [uploadedImg, setUploadedImg] = useState<UploadFileResponse>(kennel?.img || {})

    const hookedForm = useForm<InputType>({
        defaultValues,
        resolver: zodResolver(InputSchema),
    })

    const {
        getValues,
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
    const onSubmit: SubmitHandler<InputType> = (data) => {
        // 准备server action参数
        const { profile, ...kennel } = data

        const hasImg = !isEmpty(uploadedImg)
        const img = hasImg
            // 有图像
            ? pick(uploadedImg, ['key', 'url', 'name', 'size'])
            // 没有图像
            : kennelDirty?.img?.id
                // 原来有图像现在没有了，删除
                ? { delete: true }
                // 没有到没有，不变
                : undefined
        const profileUpsertInput = !isDeepEmpty(profile) ? {
            upsert: {
                create: profile,
                update: profile,
                where: {
                    kennelId: kennel?.id
                }
            },
        } : undefined
        const imgUpsertInput = hasImg ? {
            upsert: {
                create: img,
                update: {
                    ...img,
                    updatedAt: new Date().toISOString()
                },
                where: {
                    kennelId: kennelDirty?.id
                }
            }
        } : img
        // 使用server action操作DB
        const actionParams: Prisma.KennelUpdateOneWithoutImgNestedInput | KennelCreateWithoutImgInput = kennel?.id
            ? { // 有现有犬舍id，更新
                where: {
                    id: kennel.id
                },
                data: {
                    ...kennel,
                    profile: profileUpsertInput,
                    img: imgUpsertInput
                },
                include: {
                    profile: true,
                    img: true
                }
            } : { // 创建新的犬舍
                data: {
                    ...kennel,
                    profile: !isDeepEmpty(profile) ? {
                        create: profile
                    } : undefined,
                    img: hasImg ? {
                        create: img
                    } : undefined
                },
                include: {
                    profile: true,
                    img: true
                }
            }
        const isUpdate = !!kennel?.id
        startTransition(async () => {
            // 融合上传图片的数据
            // if (!isEmpty(uploadedImg)) data.img = pick(uploadedImg, ['key', 'url', 'name', 'size'])
            // 去掉默认值带来的空关系 避免无效创建
            // if (isDeepEmpty(data.profile)) delete actionParams.create.profile
            // if (isDeepEmpty(data.img)) delete actionParams.img

            // console.log('在transition中整理好了actionParams：', { actionParams })

            const { succeed, kennel: newKennel, error } = await createOrUpdateKennelWithProfileAction(actionParams, kennelDirty?.id)
            if (succeed === 'ok') {
                // 刷新表单kennel数据
                // await revalidatePathByPathname(pathname)
                // router.refresh()
                // setTimeout(() => { location.reload() }, 1000)
                toast({
                    title: `${isUpdate ? '更新' : '创建'}成功`,
                    description: "犬舍名为：" + newKennel?.name,
                })
            } else {
                toast({
                    title: `${isUpdate ? '更新' : '创建'}失败`,
                    description: error,
                })
            }

        });
    };

    // use this to reset the form after submission succeeds
    useEffect(() => {
        if (!isEmpty(errors) || !isSubmitSuccessful) { return }
        setIsDialogOpen(false)
        if (!kennelDirty?.id) { // 新建的时候才重置
            setUploadedImg({})
            reset(defaultValues)
        }
    }, [isSubmitSuccessful])

    // use this to reset the form after submission succeeds
    // useEffect(() => {
    //     console.log('isSubmitSuccessful变化导致useeffect', { defaultValues, kennelDirty })
    //     if (!isEmpty(errors) || !isSubmitSuccessful) { return }
    //     setIsDialogOpen(false)

    //     if (!kennelDirty?.id) {
    //         setUploadedImg({})
    //         reset(defaultValues)
    //     }
    // }, [isSubmitSuccessful])

    return (
        <Form {...hookedForm}>
            {/* <p>defaultValues: {JSON.stringify(defaultValues)}, error: {JSON.stringify(errors)}, isSubmitSuccessful: {isSubmitSuccessful.toString()}</p> */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex gap-8">
                    <div id="left" className="flex-1 space-y-8 border-border pr-8 border-r">
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
                            name="profile.email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>电邮</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="profile.mobile"
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
                            name="profile.instagram"
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
                            name="profile.facebook"
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
                            name="profile.wechat"
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
                    <div id="right" className="flex flex-col items-center gap-4 lg:w-1/6">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            {(!isEmpty(uploadedImg)) ? (
                                <DialogTrigger>
                                    <div className="flex group pt-4 relative">
                                        <X className="absolute -right-2 top-2 text-slate-600/0 group-hover:text-slate-600/90 transition-all" size={20} />
                                        <Avatar className='w-[80px] h-[80px] ring-2 ring-slate-200'>
                                            <AvatarImage src={uploadedImg?.url || '/img/male-avatar.svg'} alt="avatar" />
                                            <AvatarFallback>图</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </DialogTrigger>
                            ) : (
                                <div className="flex group pt-4 relative">
                                    <Avatar className='w-[80px] h-[80px] ring-2 ring-slate-200'>
                                        <AvatarImage src='/img/male-avatar.svg' alt="avatar" />
                                        <AvatarFallback>图</AvatarFallback>
                                    </Avatar>
                                </div>
                            )}
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>确认删除已经上传的图片吗？</DialogTitle>
                                    <DialogDescription>
                                        <div className="flex w-full justify-end mt-8">
                                            <Button onClick={async (e) => { // client component
                                                e.preventDefault()
                                                // console.log('uploadedImg?.name', uploadedImg)
                                                try {
                                                    const { succeed } = await deleteUploadedKennelImg({ id: kennelDirty?.id, uploadedImg })
                                                    if (succeed === 'ok') {
                                                        setUploadedImg({})
                                                        // update the kennel
                                                        onSubmit(getValues())
                                                        setUploadedImg({})
                                                    }
                                                } finally {
                                                    setIsDialogOpen(false)
                                                }
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
                                // console.log({
                                //     title: "上传成功",
                                //     res,
                                // })
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
    )
}