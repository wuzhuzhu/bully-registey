import { cache } from 'react'
import db from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const revalidate = 3600 // revalidate the data at most every hour

// get kennels with count of pets
export const getKennelsNoCache = async ({ skip = 0, take = 10, filter }: {
    skip?: number
    take?: number
    filter?: {
        id?: string
        kennelName?: string
    }
} = {}) => {
    const kennels = await db.kennel.findMany({
        where: {
            id: filter?.id,
            name: filter?.kennelName,
        },
        include: {
            _count: {
                select: {
                    pets: true
                }
            },
        },
        skip,
        take,
        orderBy: {
            createdAt: 'desc'
        }
    })
    console.log('getKennelsNoCache', kennels)
    return kennels
}

export const getKennels = unstable_cache(getKennelsNoCache,
    ['kennels'], // this line is not for revalidate tag
    {
        revalidate,
        tags: ['kennels'] // this one works
    })


export const getKennelById = cache(async (id: string) => {
    const kennel = await db.kennel.findUnique({
        where: {
            id
        },
        include: {
            img: true,
        }

    })
    return kennel
})