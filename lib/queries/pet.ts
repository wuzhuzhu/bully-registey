import { cache } from "react"

import db from '@/lib/prisma'

export const revalidate = 3600 // revalidate the data at most every hour

export const getPets = async ({ skip = 0, take = 10, filter }: {
    skip?: number
    take?: number
    filter?: {
        kennelId?: string
        registrationId?: string
        petName?: string
    }
} = {}) => {
    // let pets
    // if (filter && Object.keys(filter).length > 0) {
    //     pets = await db.pet.findMany({
    //         where: {
    //             kennelId: filter?.kennelId,
    //             registrationId: filter?.registrationId,
    //             name: filter?.petName,
    //         },
    //         skip,
    //         take,
    //     })
    // } else {
    //     pets = await db.pet.findMany({
    //         skip,
    //         take,
    //     })
    // }
    const pets = await db.pet.findMany({
        where: {
            kennelId: filter?.kennelId,
            registrationId: filter?.registrationId,
            name: filter?.petName,
        },
        skip,
        take,
        include: {
            Kennel: true,
            registration: true,
            createdBy: true,
        }
    })
    return pets
}