'use server'

// No try catch inside this file, let the caller handle it
// TODO: check login status

import db from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import type { KennelOptionalDefaults, RegistrationStatusType } from '@/prisma/generated/zod'
import {
    // KennelCreateInputSchema,
    KennelCreateOrConnectWithoutPetsInputSchema,
} from '@/prisma/generated/zod';
import { utapi } from "uploadthing/server";
import { getServerSessionWithOption } from "../utils";

import type { UploadFileResponse } from 'uploadthing/client';

import { isDeepEmpty } from '@/lib/utils';
import { revalidateTag, revalidatePath } from 'next/cache';
import { revalidate } from '../queries/kennel';


export async function createKennelAction(
    params: Prisma.KennelCreateArgs,
) {
    const session = await getServerSessionWithOption()
    if (!session) {
        throw new Error('Not Authorized')
    }
    const data = await db.kennel.create(params)
    revalidatePath('/dashboard/edit/pet', 'layout')
    revalidatePath('/dashboard/kennel')
    return { succeed: 'ok', data }
}

export async function updateKennelAction(
    params: Prisma.KennelUpdateArgs,
    kennelId: string
) {
    const data = await db.kennel.update(params)
    revalidatePath('/dashboard/edit/kennel' + (kennelId ? kennelId : ''))
    revalidateTag('kennel')
    revalidateTag('kennels')
    return { succeed: 'ok', data }
}

// 创建犬舍 Create Kennel
export async function createOrUpdateKennelWithProfileAction(
    params: Prisma.KennelCreateArgs | Prisma.KennelUpdateArgs,
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
    revalidateTag('pets')
    // console.log('revalidate: ', '/dashboard/edit/kennel' + (kennelId ? kennelId : ''))
    // console.log('createOrUpdateKennelWithProfileAction DONE', data)
    return { succeed: 'ok', kennel: data }
}

// 创建犬 Create Pet
export async function createPetAction(
    params: Prisma.PetCreateArgs,
    petId: string = ''
) {
    // console.log('createPetAction', params)
    const session = await getServerSessionWithOption()
    if (!session) {
        throw new Error('Not Authorized')
    }
    const createBy = {
        connect: {
            id: session?.user?.id
        }
    }
    params.data.createdBy = createBy
    const data = await db.pet.create(params)
    revalidatePath('/dashboard/edit/pet', 'layout')
    // console.log('revalidate: ', '/dashboard/edit/kennel')
    // console.log('createPetAction DONE', data)
    return { succeed: 'ok', data }
}

export async function updatePetAction(
    params: Prisma.PetUpdateArgs,
    petId: string
) {
    // console.log('updatePetAction', params)
    const data = await db.pet.update(params)
    revalidatePath('/dashboard/edit/pet' + (petId ? petId : ''))
    revalidateTag('pet')
    revalidateTag('pets')
    // console.log('revalidate: ', '/dashboard/edit/kennel' + (petId ? petId : ''))
    // console.log('createOrUpdateKennelWithProfileAction DONE', data)
    return { succeed: 'ok', data }
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
    revalidateTag('pet') // template:  revalidate cache through tag
    // console.log('deletePet DONE', deleted)
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
    revalidateTag('pets') // template:  revalidate cache through tag
    // console.log('deletePet DONE', deleted)
    return { succeed: 'ok' }
}

export async function deleteUploadedKennelImg({ kennelId, uploadedImg }: {
    kennelId: undefined | string,
    uploadedImg: UploadFileResponse
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
        revalidateTag('file')
        revalidateTag('files')
    }

    // console.log('deleteUploadedFile DONE')
    return { succeed: 'ok' }
}

export async function deleteUploadedPetAvatar({ petId, uploadedImg }: {
    petId: undefined | string,
    uploadedImg: UploadFileResponse
}) {
    console.warn('deleteUploadedPetAvatar', uploadedImg)
    if (petId) {
        console.warn('开始删除pet关联的头像')
        await db.pet.update({
            where: {
                id: petId
            },
            data: {
                avatar: {
                    delete: true
                }
            }
        })
        revalidateTag('pet')
    }

    if (uploadedImg?.key) {
        await utapi.deleteFiles(uploadedImg?.key);
        revalidateTag('file')
        revalidateTag('files')
    }

    // console.log('deleteUploadedPetAvatar DONE')
    return { succeed: 'ok' }
}

export async function deleteUploadedPetImg({ petId, uploadedImg }: {
    petId: undefined | string,
    uploadedImg: UploadFileResponse
}) {
    console.warn('deleteUploadedPetAvatar', uploadedImg)
    if (petId) {
        console.warn('开始删除pet关联的图片')
        await db.pet.update({
            where: {
                id: petId
            },
            data: {
                img: {
                    delete: true
                }
            }
        })
        revalidateTag('pet')
    }

    if (uploadedImg?.key) {
        await utapi.deleteFiles(uploadedImg?.key);
        revalidateTag('file')
        revalidateTag('files')
    }

    // console.log('deleteUploadedPetImg DONE')
    return { succeed: 'ok' }
}

export async function revalidatePathByPathname(pathname: string) {
    // console.log('revalidatePathByPathname', pathname)
    revalidatePath('/')
}

export async function createFileAction(params: UploadFileResponse) {
    // console.log('createFileAction', { params })
    const file = await db.file.create({
        data: params
    })
    revalidateTag('file')
    // console.log('createFileAction OK', { params })
    return { succeed: 'ok', data: file }
}

export async function changePetStatusById(petId: string, status: RegistrationStatusType) {
    // console.log('changePetStatusById', { petId, status })
    const pet = await db.pet.update({
        where: {
            id: petId
        },
        data: {
            registration: {
                update: {
                    status
                }
            }
        }
    })
    revalidateTag('pet')
    revalidateTag('pets')
    // console.log('changePetStatusById OK', { petId, status })
    return { succeed: 'ok', data: pet }
}

// examples

export async function whoAmI() {
    const session = await getServerSessionWithOption()
    return session?.user?.name || 'Anonymous'
}

export async function sampleDelayedServerAction(
    params: any
) {
    // console.log('sample Delayed Server Action', params)
    await new Promise(resolve => setTimeout(resolve, 1000))
    // console.log('sampleDelayedServerAction DONE')
    return { created: 'ok' }
}