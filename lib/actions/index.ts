'use server'

// TODO: check login status

import { getServerSessionWithOption } from "../utils"
import db from '@/lib/prisma'
import {
    KennelCreateInputSchema
} from '@/prisma/generated/zod'
import { isEmpty } from 'lodash-es'
import { utapi } from "uploadthing/server";

import { type UploadFileResponse } from 'uploadthing/next';

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
    // console.log('createKennelWithProfileAction', params)
    try {
        KennelCreateInputSchema.parse(params)
    } catch (e) {
        console.log('createKennelWithProfileAction', e)
        return { created: 'error', error: e.message }
    }

    if (isEmpty(params.Profile.create)) {
        params.Profile = undefined
    }
    // console.log('createKennelWithProfileAction', params)
    const data = await db.kennel.create({
        data: params
    })
    // console.log('createKennelWithProfileAction DONE')
    return { created: 'ok', kennel: data }
}

export async function deleteUploadedFile(uploadedImg: UploadFileResponse) {
    try {
        console.warn('deleteUploadedFile', uploadedImg)
        await utapi.deleteFiles(uploadedImg?.key);
        console.log('deleteUploadedFile DONE')
        return { succeed: 'ok' }
    } catch (e) {
        console.log('deleteUploadedFile', e)
        return { succeed: 'error', error: e.message }
    }
}