import { cache } from "react"
import { unstable_cache } from "next/cache"

import db from '@/lib/prisma'
import { get } from "http"

export const revalidate = 3600 // revalidate the data at most every hour

// export const getPetsSimple = async () => {
//     const pets = await db.pet.findMany({
//         include: {
//             createdBy: true,
//             kennel: true,
//             registration: true,
//         }
//     })
//     return pets
// }

export const getPetsNoCache = async ({ skip = 0, take = 10, filter }: {
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
            registration: {
                id: filter?.registrationId
            },
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
    console.log('getPets', pets)
    return pets
}

export const getPets = unstable_cache(getPetsNoCache,
    ['pets'], // this line is not for revalidate tag
    {
        revalidate,
        tags: ['pets'] // this one works
    })

const getPetFamilyDepth = cache(async (id: string, depth = 1) => {
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
})
