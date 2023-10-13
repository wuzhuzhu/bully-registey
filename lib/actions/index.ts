'use server'

import { getServerSessionWithOption } from "../utils"
import db from '@/lib/prisma'

export async function whoAmI() {
    const session = await getServerSessionWithOption()
    return session?.user?.name || 'Anonymous'
}

export async function createKennelWithProfileAction(
    params: any
) {
    console.log('createKennelWithProfileAction', params)
    await db.kennel.create({
        ...params,
        profile: {
            create: params.profile
        }
    })
    return { created: 'ok' }
}