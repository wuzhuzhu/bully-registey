import { Session } from 'next-auth';
'use server'

// No try catch inside this file, let the caller handle it
// TODO: check login status

import { getServerSessionWithOption } from "../utils"
import db from '@/lib/prisma'
import {
    KennelCreateInputSchema
} from '@/prisma/generated/zod'
import { isEmpty } from 'lodash-es'
import { utapi } from "uploadthing/server";

import type { UploadFileResponse } from 'uploadthing/client';

import { isDeepEmpty } from '@/lib/utils'
import { revalidate } from '../queries/kennel';
import { revalidatePath, revalidateTag } from 'next/cache';

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
        throw new Error('Invalid Kennel Data on creating Kennel')
    }

    if (isDeepEmpty(params.profile)) {
        params.profile = undefined
    }
    // console.log('createKennelWithProfileAction', params)
    const data = await db.kennel.create({
        data: params
    })
    // console.log('createKennelWithProfileAction DONE')
    return { created: 'ok', kennel: data }
}

// 删除 Delete

export async function deletePetById(petId: string) {
    const session = await getServerSessionWithOption()
    if (!session) {
        throw new Error('Not Authorized')
    }

    console.warn('deletePet', { petId })
    const deleted = await db.pet.delete({
        where: {
            id: petId,
            // createdById: session?.user?.id
        }
    })
    // revalidatePath('/dashboard/pets')
    revalidateTag('pets') // template:  revalidate cache through tag
    console.log('deletePet DONE', deleted)
    return { succeed: 'ok' }
}

export async function deleteUploadedFile(uploadedImg: UploadFileResponse) {
    console.warn('deleteUploadedFile', uploadedImg)
    await utapi.deleteFiles(uploadedImg?.key);
    console.log('deleteUploadedFile DONE')
    return { succeed: 'ok' }
}