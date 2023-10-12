'use server'

import { getServerSessionWithOption } from "../utils"

export async function whoAmI() {
    const session = await getServerSessionWithOption()
    return session?.user?.name || 'Anonymous'
}