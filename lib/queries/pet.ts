import { cache } from "react"

import db from '@/lib/prisma'

export const revalidate = 3600 // revalidate the data at most every hour

export const getPets = async ({ skip = 0, take = 10 }: {
    skip?: number
    take?: number
    kennelId?: string
    registrationId?: string
    petName?: string
} = {}) => {
    const pets = await db.pet.findMany({
        skip,
        take,
    })
    return pets
}