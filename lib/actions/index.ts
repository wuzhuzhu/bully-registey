'use server'

import type { Prisma } from '@prisma/client'
import type { KennelOptionalDefaults } from '@/prisma/generated/zod'

// No try catch inside this file, let the caller handle it
// TODO: check login status

import db from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import type { KennelOptionalDefaults } from '@/prisma/generated/zod'
import {
    // KennelCreateInputSchema,
    KennelCreateOrConnectWithoutPetsInputSchema,
} from '@/prisma/generated/zod';
import { utapi } from "uploadthing/server";
import { getServerSessionWithOption } from "../utils";

import type { UploadFileResponse } from 'uploadthing/client';

import { isDeepEmpty } from '@/lib/utils';
import { revalidateTag, revalidatePath } from 'next/cache';


// 创建犬舍 Create Kennel
export async function createOrUpdateKennelWithProfileAction(
    params: Prisma.KennelCreateOrConnectWithoutPetsInput,
    kennelId: string = ''
) {
    const isUpdate = !!kennelId
    console.log('createOrUpdateKennelWithProfileAction', params)
    // try {
    //     KennelCreateOrConnectWithoutPetsInputSchema.parse(params)
    // } catch (e) {
    //     console.log('createOrUpdateKennelWithProfileAction', e)
    //     throw new Error('Invalid Kennel Data on creating Kennel')
    // }
    // console.log('createKennelWithProfileAction', params)

    // prisma 的upsert不支持嵌套的upsert，所以这里需要手动处理
    const data = isUpdate ? await db.kennel.update(params) : await db.kennel.create(params)
    revalidatePath('/dashboard/edit/kennel' + (kennelId ? kennelId : ''))
    console.log('revalidate: ', '/dashboard/edit/kennel' + (kennelId ? kennelId : ''))
    console.log('createOrUpdateKennelWithProfileAction DONE', data)
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
    revalidateTag('pets') // template:  revalidate cache through tag
    console.log('deletePet DONE', deleted)
    return { succeed: 'ok' }
}

export async function deleteKennelById(kennelId: string) {
    const session = await getServerSessionWithOption()
    if (!session) {
        throw new Error('Not Authorized')
    }

    console.warn('delete kennel', { kennelId })
    const deleted = await db.kennel.delete({
        where: {
            id: kennelId,
            // createdById: session?.user?.id
        }
    })
    revalidateTag('kennels') // template:  revalidate cache through tag
    console.log('deletePet DONE', deleted)
    return { succeed: 'ok' }
}

export async function deleteUploadedFile({ kennelId, uploadedImg }: {
    kennelId: undefined | string,
    UploadFileResponse: UploadFileResponse
}) {
    console.warn('deleteUploadedFile', uploadedImg)
    if (kennelId) {
        console.warn('开始删除kennel关联的图片')
        await db.kennel.update({
            where: {
                id: kennelId
            },
            data: {
                img: {
                    delete: true
                }
            }
        })
        revalidateTag('kennel')
    }

    if (uploadedImg?.key) {
        await utapi.deleteFiles(uploadedImg?.key);
        revalidateTag('file', 'files')
    }

    console.log('deleteUploadedFile DONE')
    return { succeed: 'ok' }
}

export async function revalidatePathByPathname(pathname: string) {
    console.log('revalidatePathByPathname', pathname)
    revalidatePath('/')
}

// examples

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