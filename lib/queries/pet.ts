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
    const pets = await db.pet.findMany({
        where: {
            kennelId: filter?.kennelId,
            registrationId: filter?.registrationId,
            name: filter?.petName,
        },
        skip,
        take,
        include: {
            kennel: true,
            registration: true,
            createdBy: true,
        }
    })
    return pets
}

export const getPetFamilyDepth = async (id: string, depth = 1) => {
    let includeObject: any = {
        include: { parents: true }
    }
    let pointer = includeObject.include;
    for (let i = 0; i < depth - 1; i++) {
        pointer.parents = { include: { children: true } };
        pointer = pointer.children.include;
    }

    return db.pet.findMany({
        where: {
            id
        },
        include: includeObject.include
    });
}