'use client'

import { UploadButton } from '@/lib/uploadthing'
import { get, isEmpty, pick } from 'lodash-es'
import { X } from "lucide-react"
import Image from 'next/image'

import { type UploadFileResponse } from 'uploadthing/next'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { deleteUploadedPetAvatar, createFileAction, updatePetAction } from '@/lib/actions'
import { useState } from 'react'
import { FileCreateInputSchema } from '@/prisma/generated/zod'
import { useToast } from '@/components/ui/use-toast'
// import {
//     ProfileCreateWithoutKennelInputSchema, // 用以合并扁平的profile字段
//     KennelOptionalDefaultsSchema, // 没有关联关系，且自动字段为可选的schema，手动合并profile字段
//     KennelCreateOrConnectWithoutPetsInputSchema // 最终的输出到action的结构，在这个页面创建kennel只不创建pets
// } from '@/prisma/generated/zod'

const PriviewImage = ({ src, type }: {
    src: string,
    type?: string
}) => {

    return type === 'avatar'
        ? <Avatar className='w-[80px] h-[80px] ring-2 ring-slate-200'>
            <AvatarImage src={src} alt={type} />
            <AvatarFallback>图</AvatarFallback>
        </Avatar>
        : <div>
            <Image className='object-cover' src={src} alt={type} width={200} height={150} />
        </div>
}

const FileUpload = ({ uploadedImg, setUploadedImg, petDirty, submit, getValues, type, deleteUploaded }: {
    uploadedImg: UploadFileResponse
    setUploadedImg: (arg: UploadFileResponse) => void
    petDirty: any
    submit: (value: any) => void
    getValues: () => any
    type: string
    deleteUploaded: typeof deleteUploadedPetAvatar
}) => {
    const { toast } = useToast()
    // console.log({ type, uploadedImg })
    // debugger
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const defaultImg = type === 'avatar'
        ? '/img/male-avatar.svg'
        : '/img/pet-img-default.svg'

    return (
        <div className="flex flex-col gap-4 items-center">
            {/* <>{JSON.stringify(uploadedImg)}</> */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {(!isEmpty(uploadedImg)) ? (
                    <DialogTrigger>
                        <div className="flex group pt-4 relative">
                            <X className="absolute -right-2 top-2 text-slate-600/0 group-hover:text-slate-600/90 transition-all" size={20} />
                            <PriviewImage src={uploadedImg?.url || defaultImg} type={type} />
                        </div>
                    </DialogTrigger>
                ) : (
                    <div className="flex group pt-4 relative">
                        <PriviewImage src={uploadedImg?.url || defaultImg} type={type} />
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
                                        const { succeed } = await deleteUploaded({ petId: petDirty?.id, uploadedImg })
                                        if (succeed === 'ok') {
                                            setUploadedImg({})
                                            // delete file in the pet
                                            /* if (petDirty?.id) { // 更新状态下，已经有petId了
                                                if (type === 'avatar') {
                                                    const { succeed: updateAvatarSucceed } = updatePetAction({ // 删除掉file自动消失
                                                        where: { id: petDirty?.id },
                                                        data: {
                                                            avatar: {
                                                                delete: true
                                                            }
                                                        }
                                                    }, petDirty?.id)
                                                } else {
                                                    const { succeed: updateImgSucceed } = updatePetAction({ // 删除掉file自动消失
                                                        where: { id: petDirty?.id },
                                                        data: {
                                                            img: {
                                                                delete: true
                                                            }
                                                        }
                                                    }, petDirty?.id)
                                                }
                                            } */
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
                onClientUploadComplete={async (res: UploadFileResponse) => {
                    let f = get(res, '0', {})
                    f = pick(f, ['key', 'url', 'name', 'size'])
                    setUploadedImg(f)
                    const { succeed, data: createdFileData } = await createFileAction(f)
                    console.log({
                        title: "上传成功",
                        createdFileData,
                    })
                    if (succeed === 'ok' && petDirty?.id) { // 更新状态下，已经有petId了, 直接连接上
                        if (type === 'avatar') {
                            const { succeed, data } = await updatePetAction({
                                where: { id: petDirty?.id },
                                data: {
                                    avatar: {
                                        connect: {
                                            id: createdFileData?.id
                                        }
                                    }
                                },
                                include: {
                                    avatar: true
                                }
                            }, petDirty?.id)
                            if (succeed === 'ok') {
                                toast({
                                    title: '关联成功',
                                    description: "头像文件已经关联到" + petDirty?.name + data?.avatar?.name,
                                })
                            }
                        } else {
                            const { succeed, data } = await updatePetAction({
                                where: { id: petDirty?.id },
                                data: {
                                    img: {
                                        connect: {
                                            id: createdFileData?.id
                                        }
                                    }
                                },
                                include: {
                                    img: true
                                }
                            }, petDirty?.id)
                            if (succeed === 'ok') {
                                toast({
                                    title: '关联成功',
                                    description: "图片文件已经关联到" + petDirty?.name + data?.img?.name,
                                })
                            }
                        }
                    }
                }}
                onUploadError={(error: Error) => {
                    console.error({
                        title: "上传失败",
                        error: error.message,
                    })
                }}
                content={{
                    button({ ready }) {
                        if (ready) return `上传${type === 'avatar' ? '头像' : '图片'}`;
                        return "Getting ready...";
                    },
                    allowedContent({ ready, fileTypes, isUploading }) {
                        if (!ready) return "文件不符合要求";
                        if (isUploading) return "上传中..";
                        return `最大4MB, ${type === 'avatar' ? '150x150' : '600x450'}px, 格式jpg/png/svg`;
                    },
                }}
            />
        </div >
    )
}

export default FileUpload