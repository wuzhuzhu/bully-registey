'use client'
import { startOfDay } from "date-fns"
import { formatInTimeZone } from 'date-fns-tz'
import { isEmpty, omit } from 'lodash-es'
import { CalendarIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState, useTransition } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Link from "next/link"
import z from 'zod'
import { DevTool } from "@hookform/devtools"
import type { Prisma } from '@prisma/client'
import { type UploadFileResponse } from 'uploadthing/next'

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
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from '@/components/ui/separator'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { cn, isDeepEmpty, makeNullablePropsOptional } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"
import RelatedPets from './components/related-pets'

import { createPetAction, deleteUploadedPetAvatar, deleteUploadedPetImg, updatePetAction } from '@/lib/actions'
// import {
//     ProfileCreateWithoutKennelInputSchema, // 用以合并扁平的profile字段
//     KennelOptionalDefaultsSchema, // 没有关联关系，且自动字段为可选的schema，手动合并profile字段
//     KennelCreateOrConnectWithoutPetsInputSchema // 最终的输出到action的结构，在这个页面创建kennel只不创建pets
// } from '@/prisma/generated/zod'
import { Pet, PetCreateInputSchema, PetOptionalDefaultsSchema, PetCreateManyCreatedByInputSchema, PetOptionalDefaultsWithRelationsSchema, PetWithRelationsSchema } from '@/prisma/generated/zod'
import type { PetWithRelations } from '@/prisma/generated/zod'
import FileUpload from './components/file-upload'
import { Skeleton } from "@/components/ui/skeleton"

const InputSchema = makeNullablePropsOptional(PetOptionalDefaultsSchema)
    .omit({
        kennelId: true,
        createdById: true,
    })
    .merge(z.object({
        registration: z.object({
            readableId: z.string().optional(),
        }).optional().nullable(),
        kennel: z.object({
            id: z.string().optional(),
        }).optional().nullable(),
    }))
type InputType = z.infer<typeof InputSchema>


export default function PetForm({ pet: petDirty, session, kennels }: {
    pet?: Nullable<PetWithRelations>,
    session: { user?: { id: string } },
    kennels?: { id: string, name: string }[]
}) {
    const router = useRouter()
    const { toast } = useToast()
    const pathname = usePathname()

    // const pet = omit(petDirty, ['createdById', 'kennel', 'parents', 'children', 'registration'])
    const pet = petDirty?.id ? InputSchema.strip().parse(omit(petDirty, ['kennelId', 'createdById'])) : undefined
    console.log('!!!!更新pet', pet, petDirty)
    const defaultValues: Partial<Nullable<Pet>> = petDirty?.id
        ? pet // 更新，使用清理过的数据
        : { // 创建，使用默认值
            name: '',
            nameEn: '',
            ownerName: '',
            type: 'DOG',
            gender: 'MALE',
            birthDate: startOfDay(new Date()),
            breed: '',
            location: '',
            color: '',
            registration: {
                readableId: '',
            },
            kennel: {
                id: ''
            },
        }
    // console.log({ petDirty })

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // upload img
    const [uploadedImg, setUploadedImg] = useState<UploadFileResponse>(petDirty?.img || {})
    const [uploadedAvatar, setUploadedAvatar] = useState<UploadFileResponse>(petDirty?.avatar || {})

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
    const onSubmit: SubmitHandler<InputType> = ({ registration, kennel, ...data }) => {
        // 准备server action参数
        console.log('onSubmit, 准备server action参数开始,', { registration, kennel, ...data })
        const isUpdate = !!petDirty?.id
        const hasOriginalImg = !isDeepEmpty(petDirty?.img)
        const hasOriginalAvatar = !isDeepEmpty(petDirty?.avatar)
        const hasImg = !isEmpty(uploadedImg)
        const hasAvatar = !isEmpty(uploadedAvatar)
        // prepare create data
        const createData = { ...data }
        const updateData = { ...data }


        if (kennel?.id === 'DELETE' && petDirty?.kennel?.id) {
            // 原有kennel被删除
            createData.kennel = {
                disconnect: true
            }
            updateData.kennel = {
                disconnect: true
            }
        } else if (kennel?.id && kennel?.id !== petDirty?.kennel?.id) {
            // 如果有kennelId，并且有变更,就创建kennel链接语句
            const kennelConnect = {
                connect: {
                    id: kennel?.id
                }
            }
            createData.kennel = kennelConnect
            updateData.kennel = kennelConnect
        }

        // 如果有readableId，就创建registration
        if (registration?.readableId && registration?.readableId !== petDirty?.registration?.readableId) {
            const registraionConnectOrCreate = {
                connectOrCreate: {
                    create: {
                        readableId: registration?.readableId,
                        status: 'APPROVED',
                        reviewedBy: {
                            connect: {
                                id: session.user?.id
                            }
                        }
                    },
                    where: {
                        readableId: registration?.readableId
                    }
                }
            }
            const registrationUpsert = {
                upsert: {
                    where: {
                        petId: petDirty?.id
                    },
                    create: {
                        readableId: registration?.readableId,
                        status: 'APPROVED',
                        reviewedBy: {
                            connect: {
                                id: session.user?.id
                            }
                        }
                    },
                    update: {
                        readableId: registration?.readableId,
                    }
                }
            }
            createData.registration = registraionConnectOrCreate
            updateData.registration = registrationUpsert
            // debugger
        }

        // const img = pick(uploadedImg, ['key', 'url', 'name', 'size'])
        // const avatar = pick(uploadedAvatar, ['key', 'url', 'name', 'size'])

        if (!isUpdate) { // 新建Pet，之前没有PetId，一定没有在上传文件中关联过
            createData.img = hasImg ? {
                connectOrCreate: {
                    create: uploadedImg,
                    where: {
                        key: uploadedImg?.key
                    }
                }
            } : undefined
            createData.avatar = hasAvatar ? {
                connectOrCreate: {
                    create: uploadedAvatar,
                    where: {
                        key: uploadedAvatar?.key
                    }
                }
            } : undefined
            const createParams = {
                data: {
                    ...createData,
                    createdBy: {
                        connect: {
                            id: session.user?.id
                        }
                    }
                },
                include: {
                    kennel: true,
                    registration: true,
                    createdBy: true,
                    parents: true,
                    avatar: true,
                    img: true,
                }
            }

            // debugger
            startTransition(async () => {
                console.log('在transition中整理好了actionParams：', { createParams })
                // debugger
                const { succeed, data: newPet, error } = await createPetAction(createParams)
                if (succeed === 'ok') {
                    toast({
                        title: '创建成功',
                        description: "犬名为：" + newPet?.name,
                    })
                } else {
                    toast({
                        title: '创建失败',
                        description: error,
                    })
                }
            });
        } else {
            const imgInput = hasOriginalImg
                ? hasImg
                    ? petDirty?.img?.key === uploadedImg?.key
                        ? undefined // 上传的图片和原来的一样，不更新
                        : {
                            upsert: {
                                create: uploadedImg,
                                update: {
                                    ...uploadedImg,
                                    updatedAt: new Date().toISOString()
                                },
                                where: {
                                    petId: petDirty?.id
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
            const avatarInput = hasOriginalAvatar
                ? hasAvatar
                    ? petDirty?.avatar?.key === uploadedAvatar?.key
                        ? undefined // 有旧有新相等
                        : {
                            upsert: { // 有旧有新不相等
                                create: uploadedAvatar,
                                update: {
                                    ...uploadedAvatar,
                                    updatedAt: new Date().toISOString()
                                },
                                where: {
                                    petId: petDirty?.id
                                }
                            }
                        }
                    : { // 有旧无新
                        delete: true
                    }
                : hasAvatar
                    ? { // 无旧有新
                        create: uploadedAvatar
                    } // 无旧无新
                    : undefined

            updateData.img = imgInput
            const updateParams = {
                where: {
                    id: petDirty?.id
                },
                data: {
                    ...updateData,
                    img: imgInput,
                    avatar: avatarInput,
                    createdBy: {
                        connect: {
                            id: session.user?.id
                        }
                    }
                },
                include: {
                    kennel: true,
                    registration: true,
                    createdBy: true,
                    parents: true,
                    avatar: true,
                    img: true,
                },
            }
            startTransition(async () => {
                console.log('在transition中整理好了actionParams：', { updateParams })
                const { succeed, data: newPet } = await updatePetAction(updateParams, petDirty?.id)
                if (succeed === 'ok') {
                    toast({
                        title: '更新成功',
                        description: "犬名为：" + newPet?.name,
                    })
                } else {
                    toast({
                        title: '更新失败',
                        // description: error,
                    })
                }
            });
        }
    };

    // use this to reset the form after submission succeeds
    useEffect(() => {
        if (!isEmpty(errors) || !isSubmitSuccessful) { return }
        setIsDialogOpen(false)
        if (!petDirty?.id) { // 新建的时候才重置
            setUploadedImg({})
            reset(defaultValues)
        }
    }, [isSubmitSuccessful])


    return (
        <Form {...hookedForm}>
            {/* <p>value: {JSON.stringify(getValues())}, error: {JSON.stringify(errors)}, isSubmitSuccessful: {isSubmitSuccessful.toString()}</p> */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* <p>{JSON.stringify(errors)}</p> */}
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
                                            <Input placeholder="输入犬名.." {...field} />
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
                                    <FormLabel>英文名</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="英文名" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="registration.readableId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>芯片ID(唯一)</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="输入完整芯片编号.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    <FormDescription>在犬列表中确认注册状态</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="kennel.id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>犬舍选择</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="选择已经创建的犬舍" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="overflow-y-auto max-h-[10rem]">
                                            {kennels && kennels?.length > 0 && [
                                                { id: 'DELETE', name: '解除关联' },
                                                ...kennels,
                                            ].map((kennel) => (
                                                <SelectItem key={kennel.id} value={kennel.id}>
                                                    {kennel.name}
                                                </SelectItem>
                                            ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        需要在{" "}
                                        <Link className="text-blue-500" href="/dashboard/kennel">犬舍管理</Link> 中提前建好犬舍
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="breed"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>犬种</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="犬种.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>地区</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="随意输入地区.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="color"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>颜色</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="输入文字描述.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="ownerName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>拥有者姓名</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="拥有者名字.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="ownerMobile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>拥有者电话</FormLabel>
                                    <FormControl>
                                        {/* @ts-ignore */}
                                        <Input placeholder="拥有者电话.." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>性别</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center space-x-4">
                                            <Switch
                                                checked={field.value === 'FEMALE'}
                                                onCheckedChange={() => {
                                                    field.onChange(field.value === 'FEMALE' ? 'MALE' : 'FEMALE')
                                                }}
                                            // disabled
                                            // aria-readonly
                                            />
                                            <Label htmlFor="airplane-mode">{field.value === 'FEMALE' ? "女" : '男'}</Label>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={control}
                            name="birthDate"
                            render={({ field }) => {
                                // console.log('field', field)
                                return (
                                    <FormItem>
                                        <FormLabel>生日 *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="严格按照: '2023/10/01'格式输入..'"
                                                {...field}
                                                value={formatInTimeZone(field.value, 'Asia/Shanghai', 'yyyy/MM/dd')}
                                                onBlur={(v) => {
                                                    console.log(field, control)
                                                    // debugger
                                                    field.onChange(new Date(v?.currentTarget?.value))
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        /> */}
                        <FormField
                            control={control}
                            name="birthDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>生日</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        formatInTimeZone(field.value, 'Asia/Shanghai', 'yyyy/MM/dd')
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        生日已经转换为国内时区
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />

                    </div>
                    <div id="right" className="flex flex-col items-stretch gap-8">
                        <div className="flex flex-col gap-4 items-center">
                            <FileUpload
                                {...{
                                    submit: handleSubmit(onSubmit),
                                    setUploadedImg: setUploadedAvatar,
                                    uploadedImg: uploadedAvatar,
                                    petDirty, getValues,
                                    type: 'avatar',
                                    deleteUploaded: deleteUploadedPetAvatar,
                                }} />
                            <FileUpload
                                {...{
                                    uploadedImg, setUploadedImg, petDirty, getValues,
                                    submit: handleSubmit(onSubmit),
                                    type: 'img',
                                    deleteUploaded: deleteUploadedPetImg,
                                }} />
                        </div>
                        <Separator />
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium">{petDirty?.id ? '父母' : '未保存无法选择父母'}</h4>
                            {
                                petDirty?.id && <Suspense fallback={<div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[250px]" />
                                        <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                </div>}>
                                    <RelatedPets pet={petDirty} />
                                </Suspense>
                            }

                        </div>

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
            {/* {
                process.env.NODE_ENV === 'development' &&
                <DevTool control={control} />
            } */}
        </Form >
    )
}