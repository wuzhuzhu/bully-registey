'use client'
import z from 'zod'
import { UploadButton } from '@/lib/uploadthing'
import { get, isEmpty, pick } from 'lodash-es'
import { X } from "lucide-react"
import { useEffect, useState, useTransition } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { omit } from 'lodash-es'
import { usePathname, useRouter } from 'next/navigation'
import { format, startOfDay } from "date-fns"
import { formatInTimeZone } from 'date-fns-tz'
import { CalendarIcon } from 'lucide-react'

import type { Prisma } from '@prisma/client'
import { type UploadFileResponse } from 'uploadthing/next'
import { DevTool } from "@hookform/devtools";
import { DayPicker } from 'react-day-picker';

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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from '@/components/ui/separator'

import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/components/ui/use-toast"
import RelatedPets from './components/related-pets'
import { isDeepEmpty } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from '@/lib/utils'

import { createPetAction, updatePetAction, deleteUploadedPetAvatar, deleteUploadedPetImg } from '@/lib/actions'
// import {
//     ProfileCreateWithoutKennelInputSchema, // 用以合并扁平的profile字段
//     KennelOptionalDefaultsSchema, // 没有关联关系，且自动字段为可选的schema，手动合并profile字段
//     KennelCreateOrConnectWithoutPetsInputSchema // 最终的输出到action的结构，在这个页面创建kennel只不创建pets
// } from '@/prisma/generated/zod'
import { PetOptionalDefaultsSchema, PetOptionalDefaultsWithRelationsSchema, PetCreateManyCreatedByInputSchema, Pet } from '@/prisma/generated/zod'
import type { PetOptionalDefaultsWithRelations } from '@/prisma/generated/zod'
import FileUpload from './components/file-upload'

// 表单输入结构为扁平的object
// 赋予可空内容可选属性
// const InputSchema = z.object({
//     ...PetOptionalDefaultsSchema.shape,
//     ...PetOptionalDefaultsWithRelationsSchema.shape,
// })
const InputSchema = PetCreateManyCreatedByInputSchema
type InputType = Prisma.PetCreateManyCreatedByInput


export default function Page({ pet: petDirty, session }: {
    pet?: Nullable<InputType>,
    session: { user?: { id: string } }
}) {
    const router = useRouter()
    const { toast } = useToast()
    const pathname = usePathname()

    // const pet = omit(petDirty, ['createdById', 'kennel', 'parents', 'children', 'registration'])
    const pet = InputSchema
        .strip()
        .parse(petDirty)
    delete pet.kennelId
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
            color: '',
        }
    console.log({ petDirty })

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // upload img
    const [uploadedImg, setUploadedImg] = useState<UploadFileResponse>(pet?.img || {})
    const [uploadedAvatar, setUploadedAvatar] = useState<UploadFileResponse>(pet?.img || {})

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
        const isUpdate = !!petDirty?.id
        const hasOriginalImg = !isDeepEmpty(petDirty?.img)
        const hasOriginalAvatar = !isDeepEmpty(petDirty?.avatar)
        const hasImg = !isEmpty(uploadedImg)
        const hasAvatar = !isEmpty(uploadedAvatar)
        // prepare create data
        const createData = data
        const updateData = data

        const img = pick(uploadedImg, ['key', 'url', 'name', 'size'])
        const avatar = pick(uploadedAvatar, ['key', 'url', 'name', 'size'])

        if (!isUpdate) {
            createData.img = hasImg ? {
                ...data,
                img: {
                    create: img
                }
            } : undefined
            createData.avatar = hasAvatar ? {
                ...data,
                avatar: {
                    create: img
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
                }
            }
            startTransition(async () => {
                console.log('在transition中整理好了actionParams：', { createParams })
                const { succeed, pet: newPet, error } = await createPetAction(createParams)
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
                                create: img,
                                update: {
                                    ...img,
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
                        create: img
                    }
                    : undefined
            const avatarInput = hasOriginalAvatar
                ? hasAvatar
                    ? petDirty?.avatar?.key === uploadedAvatar?.key
                        ? undefined // 上传的图片和原来的一样，不更新
                        : {
                            upsert: {
                                create: avatar,
                                update: {
                                    ...avatar,
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
                : hasAvatar
                    ? {
                        create: avatar
                    }
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
                },
            }
            startTransition(async () => {
                console.log('在transition中整理好了actionParams：', { updateParams })
                const { succeed, pet: newPet, error } = await updatePetAction(updateParams)
                if (succeed === 'ok') {
                    toast({
                        title: '更新成功',
                        description: "犬名为：" + newPet?.name,
                    })
                } else {
                    toast({
                        title: '更新失败',
                        description: error,
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
            <p>value: {JSON.stringify(getValues())}, error: {JSON.stringify(errors)}, isSubmitSuccessful: {isSubmitSuccessful.toString()}</p>
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
                                                    debugger
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
                                    uploadedImg: uploadedAvatar, setUploadedImg: setUploadedAvatar, petDirty, onSubmit, getValues,
                                    type: 'avatar',
                                    deleteUploaded: deleteUploadedPetAvatar,
                                }} />
                            <FileUpload
                                {...{
                                    uploadedImg, setUploadedImg, petDirty, onSubmit, getValues,
                                    type: 'img',
                                    deleteUploaded: deleteUploadedPetImg,
                                }} />
                        </div>
                        <Separator />
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium">父母</h4>
                            <RelatedPets />
                            <Separator />
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
            {
                process.env.NODE_ENV === 'development' &&
                <DevTool control={control} />
            }
        </Form >
    )
}