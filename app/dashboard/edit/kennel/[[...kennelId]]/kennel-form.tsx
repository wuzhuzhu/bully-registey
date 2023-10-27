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
import { createKennelAction, updateKennelAction } from '@/lib/actions'
import { isDeepEmpty } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"

import type { Prisma } from '@prisma/client'
import {
    ProfileCreateWithoutKennelInputSchema, // 用以合并扁平的profile字段
    KennelOptionalDefaultsSchema, // 没有关联关系，且自动字段为可选的schema，手动合并profile字段
    KennelCreateOrConnectWithoutPetsInputSchema // 最终的输出到action的结构，在这个页面创建kennel只不创建pets
} from '@/prisma/generated/zod'
import type { KennelOptionalDefaults } from '@/prisma/generated/zod'
import { makeNullablePropsOptional } from '@/lib/utils'
import FileUpload from './components/file-upload'

const InputSchema = makeNullablePropsOptional(KennelOptionalDefaultsSchema)
    .merge(z.object({
        profile: z.object({
            kennelId: z.string().optional().nullish(),
            email: z.string().optional().nullish(),
            mobile: z.string().optional().nullish(),
            instagram: z.string().optional().nullish(),
            facebook: z.string().optional().nullish(),
            wechat: z.string().optional().nullish(),
        }).optional().nullable()
    }))

type InputType = z.infer<typeof InputSchema>

export default function Page({ kennel: kennelDirty }: {
    kennel?: Nullable<InputType>
}) {
    const kennel = kennelDirty?.id ? omit(kennelDirty, ['profile.kennelId']) : kennelDirty

    const router = useRouter()
    const { toast } = useToast()
    const pathname = usePathname()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [uploadedImg, setUploadedImg] = useState<UploadFileResponse>(kennel?.img || {})

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

    const onSubmit: SubmitHandler<InputType> = ({ profile, ...data }) => {
        // 准备server action参数
        // console.log('onSubmit, 准备server action参数开始,', { registration, kennel, ...data })
        const isUpdate = !!kennelDirty?.id
        const hasOriginalImg = !isDeepEmpty(kennelDirty?.img)
        const hasImg = !isEmpty(uploadedImg)
        // prepare create data
        const createData = { ...data }
        const updateData = { ...data }

        if (!isUpdate) { // 新建犬舍
            createData.img = hasImg ? {
                connectOrCreate: {
                    create: uploadedImg,
                    where: {
                        key: uploadedImg?.key
                    }
                }
            } : undefined
            if (!isDeepEmpty(profile)) {
                createData.profile = {
                    create: {
                        ...profile,
                    }
                }
            }
            const createParams = {
                data: createData,
                include: {
                    profile: true,
                    img: true,
                }
            }

            // debugger
            startTransition(async () => {
                // console.log('在transition中整理好了actionParams：', { createParams })
                // debugger
                const { succeed, data: newKennel } = await createKennelAction(createParams)
                if (succeed === 'ok') {
                    toast({
                        title: '创建成功',
                        description: "犬舍名为：" + newKennel?.name,
                    })
                } else {
                    toast({
                        title: '创建失败',
                        description: '请检查输入是否正确',
                    })
                }
            });
        } else { // 更新犬舍
            const imgInput = hasOriginalImg
                ? hasImg
                    ? kennelDirty?.img?.key === uploadedImg?.key
                        ? undefined // 上传的图片和原来的一样，不更新
                        : {
                            upsert: {
                                create: uploadedImg,
                                update: {
                                    ...uploadedImg,
                                },
                                where: {
                                    petId: kennelDirty?.id
                                }
                            }
                        }
                    : {
                        delete: true
                    }
                : hasImg
                    ? {
                        create: uploadedImg
                    }
                    : undefined
            const profileInput = kennelDirty?.profile?.id
                ? { // 原有profile,更新内容
                    update: {
                        ...profile,
                    },
                } : { // 新建profile
                    create: {
                        ...profile,
                    }
                }
            const updateParams = {
                where: {
                    id: kennelDirty?.id
                },
                data: {
                    ...updateData,
                    img: imgInput,
                    profile: profileInput
                },
                include: {
                    profile: true,
                    img: true,
                }
            }
            startTransition(async () => {
                // console.log('在transition中整理好了actionParams：', { updateParams })
                const { succeed, data: newKennel } = await updateKennelAction(updateParams, kennelDirty?.id)
                if (succeed === 'ok') {
                    toast({
                        title: '更新成功',
                        description: "犬舍名为：" + newKennel?.name,
                    })
                } else {
                    toast({
                        title: '更新失败',
                        description: '请检查输入是否正确',
                    })
                }
            });
        }
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
                        <FileUpload
                            {...{
                                uploadedImg,
                                setUploadedImg,
                                kennelDirty,
                                getValues,
                                submit: handleSubmit(onSubmit),
                            }} />
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