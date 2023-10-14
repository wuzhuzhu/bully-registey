import { cache } from 'react'
import db from '@/lib/prisma'

export const revalidate = 3600 // revalidate the data at most every hour

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