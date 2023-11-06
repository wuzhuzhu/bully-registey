'use client'

import { UploadButton } from '@/lib/uploadthing'
import { get, isEmpty, pick, update } from 'lodash-es'
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

import { deleteUploadedKennelImg, createFileAction, updateKennelAction } from '@/lib/actions'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { DEFAULT_PET_AVATAR_URL } from '@/lib/constants'

const PriviewImage = ({ src }: {
    src: string,
}) => {

    return <Avatar className='w-[80px] h-[80px] ring-2 ring-slate-200'>
        <AvatarImage src={src} alt='kennel-avatar' />
        <AvatarFallback>图</AvatarFallback>
    </Avatar>
}

const FileUpload = ({ uploadedImg, setUploadedImg, kennelDirty, submit, getValues, }: {
    uploadedImg: UploadFileResponse
    setUploadedImg: (arg: UploadFileResponse) => void
    kennelDirty: any
    submit: (value: any) => void
    getValues: () => any
}) => {
    const { toast } = useToast()
    // console.log({ type, uploadedImg })
    // debugger
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const defaultImg = DEFAULT_PET_AVATAR_URL

    return (
        <div className="flex flex-col gap-4 items-center">
            {/* <>{JSON.stringify(uploadedImg)}</> */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {(!isEmpty(uploadedImg)) ? (
                    <DialogTrigger>
                        <div className="flex group pt-4 relative">
                            <X className="absolute -right-2 top-2 text-slate-600/0 group-hover:text-slate-600/90 transition-all" size={20} />
                            <PriviewImage src={uploadedImg?.url || defaultImg} />
                        </div>
                    </DialogTrigger>
                ) : (
                    <div className="flex group pt-4 relative">
                        <PriviewImage src={uploadedImg?.url || defaultImg} />
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
                                        const { succeed } = await deleteUploadedKennelImg({ kennelId: kennelDirty?.id, uploadedImg })
                                        if (succeed === 'ok') {
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
                onClientUploadComplete={async (res: UploadFileResponse) => {
                    let f = get(res, '0', {})
                    f = pick(f, ['key', 'url', 'name', 'size'])
                    setUploadedImg(f)
                    const { succeed, data: createdFileData } = await createFileAction(f)
                    console.log({
                        title: "上传成功",
                        createdFileData,
                    })
                    if (succeed === 'ok' && kennelDirty?.id) { // 更新状态下，已经有Id了, 直接连接上
                        const { succeed, data } = await updateKennelAction({
                            where: { id: kennelDirty?.id },
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
                        }, kennelDirty?.id)
                        if (succeed === 'ok') {
                            toast({
                                title: '关联成功',
                                description: "图片文件已经关联到" + kennelDirty?.name + data?.img?.name,
                            })
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
                        if (ready) return "上传图片";
                        return "Getting ready...";
                    },
                    allowedContent({ ready, fileTypes, isUploading }) {
                        if (!ready) return "文件不符合要求";
                        if (isUploading) return "上传中..";
                        return '最大4MB 50x50 jpg/png';
                    },
                }}
            />
        </div >
    )
}

export default FileUpload