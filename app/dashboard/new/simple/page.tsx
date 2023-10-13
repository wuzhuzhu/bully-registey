'use client'

import { startTransition } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import { createKennelWithProfileAction } from '@/lib/actions'
import router from "next/router"

type Inputs = {
    example: string
    exampleRequired: string
}

export default function Page() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()


    const handleClick = handleSubmit((data) => {
        console.log(data)
        startTransition(async () => {
            await createKennelWithProfileAction(data)
            console.log('!!!!!!!!!!!!!!done')
            // router.replace("/items");
        })
    })

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleClick}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    )
}