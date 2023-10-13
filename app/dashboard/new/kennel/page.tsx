"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { createKennelWithProfileAction } from '@/lib/actions'

import { KennelCreateInputSchema, ProfileCreateInputSchema } from '@/prisma/generated/zod'

// 使用kennel和profile的schema合并扁平的表单schema
// merge: If the two schemas share keys, the properties of B overrides the property of A
// id和createdAt会被覆盖
const KennelCreatePageInputSchema = ProfileCreateInputSchema.merge(KennelCreateInputSchema)
type KennelCreatePageInputType = z.infer<typeof KennelCreatePageInputSchema>

// This can come from your database or API.
const defaultValues: Partial<KennelCreatePageInputType> = {
    name: '',
    nameEn: '',
    imgUrl: '/img/dog-company-logo-icon.svg',
    description: '犬舍主人很懒，没有写简介哦~',
    profile: {}
}

const CreateKennelPage = () => {
    const { toast } = useToast()
    // console.log(name)

    const form = useForm<KennelCreatePageInputType>({
        resolver: zodResolver(KennelCreatePageInputSchema),
        defaultValues,
        mode: "onChange",
    })

    const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
    })

    function onSubmit(data: KennelCreatePageInputType) {
        console.log(data)
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(createKennelWithProfileAction)} className="space-y-8">
                    {/* name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>犬舍名称</FormLabel>
                                <FormControl>
                                    <Input placeholder="输入中文名称" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    这里登记犬舍的中文名称
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nameEn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>犬舍英文名</FormLabel>
                                <FormControl>
                                    <Input placeholder="输入英文名称" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>简介</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="输入关于犬舍的介绍.."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    只支持纯文本，不支持富文本格式
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* TODO: logo 上传图片  */}
                    {/*  TODO: 这里会报错，之后排查
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>手机号</FormLabel>
                                <FormControl>
                                    <Input placeholder="输入正确手机号.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="instagram"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>instagram</FormLabel>
                                <FormControl>
                                    <Input placeholder="输入instagram 账户名.." {...field} />
                                </FormControl>
                                {field.value && <FormDescription>
                                    访问地址为<Link href={`https://instagram.com/${field.value}`}>{`https://instagram.com/${field.value}`}</Link>
                                </FormDescription>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="facebook"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>facebook</FormLabel>
                                <FormControl>
                                    <Input placeholder="输入facebook 账户名.." {...field} />
                                </FormControl>
                                {field.value && <FormDescription>
                                    访问地址为<Link href={`https://facebook.com/${field.value}`}>{`https://facebook.com/${field.value}`}</Link>
                                </FormDescription>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="wechat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>微信</FormLabel>
                                <FormControl>
                                    <Input placeholder="输入微信账户名.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    {/* 下拉示例 */}
                    {/* <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    You can manage verified email addresses in your{" "}
                                    <Link href="/examples/forms">email settings</Link>.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    <Button type="submit">创建/更新犬舍</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateKennelPage