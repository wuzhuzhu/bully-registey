import db from '@/lib/prisma'
import { pick } from 'lodash-es'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: Request, ctx: { params: { petId: string } }) {
    // console.log('use parent updating petId', ctx?.params?.petId, { request })
    const petId = ctx?.params?.petId
    const { parent } = await request.json()
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
        .filter((p) => p.gender !== parent?.gender)
        .map((p) => pick(p, ['id']))
        .splice(0, 1) // only keep one parent or none
    keepedParents.push({ id: parent?.id })
    // console.log({ preParents, keepedParents })
    // use keepedParentId and parent.id update pet.parents
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
    return NextResponse.json({ succeed: 'ok', pet: update }, { status: 200 })
}
