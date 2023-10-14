'use client'

import { useTransition } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { createKennelWithProfileAction } from '@/lib/actions'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const InputSchema = z.object({
    name: z.string().min(3, {
        message: '最少3个字符',
    }).max(10),
    number: z.coerce.number(),
    profile: z.object({
        email: z.string().email(),
    }),
}).strict()

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
        debugger
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
                    <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number Input</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name. It can be your real name or a
                                    pseudonym. You can only change this once every 30 days.
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name. It can be your real name or a
                                    pseudonym. You can only change this once every 30 days.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Update profile</Button>
                </form>

            </Form>
        </div>
    )
}