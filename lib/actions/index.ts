'use server'

import { getServerSessionWithOption } from "../utils"
import db from '@/lib/prisma'

export async function whoAmI() {
    const session = await getServerSessionWithOption()
    return session?.user?.name || 'Anonymous'
}

export async function sampleDelayedServerAction(
    params: any
) {
    console.log('sample Delayed Server Action', params)
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('sampleDelayedServerAction DONE')
    return { created: 'ok' }
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
    console.log('createKennelWithProfileAction DONE')
    return { created: 'ok' }
}
