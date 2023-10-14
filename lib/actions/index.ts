'use server'

import { getServerSessionWithOption } from "../utils"
import db from '@/lib/prisma'
import {
    KennelCreateInputSchema
} from '@/prisma/generated/zod'

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

    try {
        KennelCreateInputSchema.parse({ a: 1 })
    } catch (e) {
        console.log('createKennelWithProfileAction', e)
        return { created: 'error', error: e.message }
    }
    // console.log('createKennelWithProfileAction', params)
    const data = await db.kennel.create({
        data: params
    })
    // console.log('createKennelWithProfileAction DONE')
    return { created: 'ok', kennel: data }
}
