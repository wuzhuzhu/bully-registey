import db from '@/lib/prisma'
import { pick } from 'lodash-es'
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request, ctx: { params: { petId: string } }) {
    const petId = ctx?.params?.petId
    const { gender } = await request.json()
    // console.log('use parent updating petId parents', { parent, petId })

    const pet = await db.pet.findUnique({
        where: {
            id: petId as string,
        },
        include: {
            parents: true,
        }
    })
    const preParents = pet?.parents || []
    const keepedParents = preParents
        .filter((p) => p.gender !== gender)
        .map((p) => pick(p, ['id']))
        .splice(0, 1) // only keep one parent or none
    const update = await db.pet.update({
        where: {
            id: petId as string,
        },
        data: {
            parents: {
                set: keepedParents
            }
        },
        include: {
            parents: true,
        }
    })
    // console.log('变更后的父母', update.parents.length, update.parents[0], update.parents[1])
    revalidatePath(`/dashboard/edit/pet/${petId}`, 'page')
    revalidateTag('pet')
    // revalidateTag('pets')
    return NextResponse.json({ succeed: 'ok', pet: update }, { status: 200 })
}
