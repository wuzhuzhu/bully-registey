import { cache } from 'react'
import db from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const revalidate = 3600 // revalidate the data at most every hour

export const getKennelsSimple = unstable_cache(async () => {
    const kennels = await db.kennel.findMany({
        select: {
            id: true,
            name: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return kennels
}, ['kennels-simple'], {
    revalidate,
    tags: ['kennels']
})

// get kennels with count of pets
export const getKennelsNoCache = async ({
    skip = 0,
    take = 1000,
    filter
}: {
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
        tags: ['kennels', 'pets', 'file'] // this one works
    })

export const getKennelById = unstable_cache(async (id: string) => {
    console.log('getKennelById', id)
    const kennel = await db.kennel.findUnique({
        where: {
            id
        },
        include: {
            img: true,
            profile: true,
        }

    })
    return kennel
}, ['kennel'], {
    revalidate,
    tags: ['kennel', 'file']
})
