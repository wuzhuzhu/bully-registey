'use client'

import { useTransition } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { isEmpty } from 'lodash-es'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { createKennelWithProfileAction, sampleDelayedServerAction } from '@/lib/actions'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    KennelCreateInputSchema as InputSchema
} from '@/prisma/generated/zod'

type InputsType = z.infer<typeof InputSchema>

export default function Page() {
    const hookedForm = useForm<InputsType>({
        defaultValues: {
        },
        resolver: zodResolver(InputSchema),
    })

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = hookedForm

    const [isPending, startTransition] = useTransition();

    // https://scastiel.dev/server-components-actions-react-nextjs
    // https://github.com/orgs/react-hook-form/discussions/10757
    const onSubmit: SubmitHandler<InputsType> = (data) => {
        startTransition(async () => {
            await createKennelWithProfileAction(data)
            console.log('!!!!!!!!!!!!!!done')
        });
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div>
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
                        <div id="right" className="flex-shrink">
                            {/* TODO: 完成图片上传功能 */}
                            图片上传功能待实现
                        </div>
                    </div>
                    <Button disabled={!isEmpty(errors)} type="submit">{!isEmpty(errors) ? '修正错误' : '创建'}</Button>
                </form>

            </Form>
        </div >
    )
}