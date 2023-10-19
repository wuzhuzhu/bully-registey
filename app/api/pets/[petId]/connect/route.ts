import { revalidateTag } from 'next/cache'
import db from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { find, pick } from 'lodash-es'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: Request, ctx: { params: { petId: string } }) {
    const petId = ctx?.params?.petId
    // const gender = request.nextUrl.searchParams.get('secret')
    // todo : fetch a list of parents and remove one in transaction
    const { parent } = request.body
    console.log('use parent updating petId parents', { parent, petId })

    try {
        await db.$transaction(async (tx) => {
            const pet = await tx.pet.findUnique({
                where: {
                    id: petId as string,
                },
                include: {
                    parents: true,
                }
            })
            const preParents = pet?.parents
            const keepedParentId = find(preParents, function (p) { return p.gender !== parent.gender })?.id;
            // use keepedParentId and parent.id update pet.parents
            const update = await tx.pet.update({
                where: {
                    id: petId as string,
                },
                data: {
                    parents: {
                        set: [keepedParentId, parent.id]
                    }
                },
                include: {
                    parents: true,
                }
            })
            NextResponse.json({ succeed: 'ok', pet: update }, { status: 200 })
            revalidateTag('pet')
            revalidateTag('pets')
        })
    } catch (err) {
        console.log(err)
        // Handle the rollback...
    }
}