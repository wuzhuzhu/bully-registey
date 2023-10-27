// generate several prisma db seed based on ./schema.prisma
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';
import { fakerZH_CN as f } from '@faker-js/faker'

import type { PetType, Gender, RegistrationStatus } from '@prisma/client' // 处理enum
import { is } from 'date-fns/locale';

const prisma = new PrismaClient();

async function main() {
    // create admin user
    const { id: adminUserId } = await prisma.user.upsert({
        where: {
            name: 'FakeAdmin',
            email: 'fake@bullyregistry.cn'
        },
        update: {
            name: 'FakeAdmin',
            email: 'fake@bullyregistry.cn'
        },
        create: {
            name: 'FakeAdmin',
            email: 'fake@bullyregistry.cn'
        },
        select: { id: true }
    })
    // Danger! will clear all data
    console.log('=== Clearing data ===')
    await prisma.kennel.deleteMany()
    await prisma.pet.deleteMany()
    await prisma.profile.deleteMany()
    await prisma.file.deleteMany()
    await prisma.registration.deleteMany()

    console.log('=== Creating Basic data ===')
    await prisma.kennel.createMany({
        data: basicKennels
    })
    await prisma.pet.createMany({
        data: getBasicPets(adminUserId)
    })

    console.log('=== creating fake imgs ===')
    const avatar1 = await prisma.file.create({
        data: {
            key: 'avatar-1',
            url: f.image.urlLoremFlickr({ category: 'animals' }),
            name: 'avatar-1',
            size: 2000,
        }
    })
    const avatar2 = await prisma.file.create({
        data: {
            key: 'avatar-2',
            url: f.image.urlLoremFlickr({ category: 'animals' }),
            name: 'avatar-2',
            size: 2000,
        }
    })
    const img1 = await prisma.file.create({
        data: {
            key: 'image-1',
            url: f.image.urlLoremFlickr({ category: 'animals' }),
            name: 'image-1',
            size: 2000,
        }
    })
    const img2 = await prisma.file.create({
        data: {
            key: 'image-2',
            url: f.image.urlLoremFlickr({ category: 'animals' }),
            name: 'image-2',
            size: 2000,
        }
    })

    console.log('=== creating marvel kennel ===')
    const marverlKennel = await prisma.kennel.create({
        data: {
            name: '漫威国际超级英雄犬舍',
            nameEn: 'Marvel Kennel',
            description: f.lorem.paragraph(),
        }
    })

    // create related data
    console.log('=== creating related Pet ===')
    const relatedPet = await prisma.pet.create({
        data: generateRelatedPetData({
            adminUserId,
            kennelId: marverlKennel.id,
            avatarId: avatar1.id,
            img1Id: img1.id,
            img2Id: img2.id,
            generationDepth: 3,
            totalGenerations: 3,
        })
    })
    console.log('@@@@@@@Related Pet CREATED, ID IS: @@@@@@@', relatedPet.id, '@@@@@')
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });


const generateKennelData = () => {
    return {
        name: '非关' + f.person.fullName(),
        nameEn: f.person.fullName(),
        description: f.lorem.paragraph(),
    }
}
const basicKennels = Array.from({ length: 30 }, generateKennelData)

function generatePetData(adminUserId: string) {
    return {
        name: '非关' + f.person.fullName(),
        nameEn: f.person.fullName(),
        ownerName: f.person.fullName(),
        type: 'DOG' as PetType, // 处理enum
        gender: f.person.sex().toUpperCase() as Gender, // 处理enum
        birthDate: f.date.past(),
        breed: f.animal.dog(),
        color: f.color.human(),
        createdById: adminUserId,
    }
    // avatar: f.image.avatar(),
}

const getBasicPets = (adminUserId: string) => {
    return Array.from({ length: 30 }, () => generatePetData(adminUserId))
}

function generateBasicPetData({ adminUserId, kennelId, avatarId, img1Id, img2Id, sex, generationDepth, totalGenerations }: {
    adminUserId: string,
    kennelId: string,
    avatarId: string,
    img1Id: string,
    img2Id: string,
    sex?: 'FEMALE' | 'MALE'
    generationDepth: number
    totalGenerations: number
}) {
    console.log('creating pet basic data', { generationDepth })
    const isRoot = totalGenerations === generationDepth
    const res: any = {
        name: `${isRoot ? '绿巨人浩克' : '浩克长辈' + (3 - generationDepth) + '代'}`,
        nameEn: 'Hulk',
        ownerName: 'Tony Stark',
        type: 'DOG' as PetType, // 处理enum
        gender: sex || f.person.sex().toUpperCase() as Gender, // 处理enum
        birthDate: f.date.past(),
        breed: '恶霸犬',
        color: f.color.human(),
        createdById: adminUserId,
        kennelId,
        avatar: {
            connect: {
                id: avatarId
            }
        },
        img: {
            connect: {
                id: img1Id
            }
        },
        registration: {
            create: {
                readableId: f.string.uuid(),
                status: 'APPROVED' as RegistrationStatus,
                registeredAt: f.date.past(),
                registerEnd: f.date.future(),
            }
        },
    }
    if (isRoot) {
        res.children = {
            create: [{
                name: '浩克孩子1',
                nameEn: 'Hulk Child1',
                ownerName: 'Tony Stark',
                type: 'DOG' as PetType, // 处理enum
                gender: f.person.sex().toUpperCase() as Gender, // 处理enum
                birthDate: f.date.past(),
                breed: '恶霸犬',
                color: f.color.human(),
                createdById: adminUserId,
                avatar: {
                    connect: {
                        id: avatarId
                    }
                },
                img: {
                    connect: { id: img1Id },
                },
            },
            {
                name: '浩克孩子2',
                nameEn: 'Hulk Child1',
                ownerName: 'Tony Stark',
                type: 'DOG' as PetType, // 处理enum
                gender: f.person.sex().toUpperCase() as Gender, // 处理enum
                birthDate: f.date.past(),
                breed: '恶霸犬',
                color: f.color.human(),
                createdById: adminUserId,
                avatar: {
                    connect: {
                        id: avatarId
                    }
                },
                img: {
                    connect: { id: img2Id },
                },
            },]
        }
    }
    return res
}

function generateRelatedPetData({
    ...args
}: {
    adminUserId: string,
    kennelId: string,
    avatarId: string,
    img1Id: string,
    img2Id: string,
    generationDepth: number
    totalGenerations: number
    sex?: 'FEMALE' | 'MALE'
}) {
    const { generationDepth, totalGenerations } = args
    const isRoot = generationDepth === totalGenerations
    const petData = generateBasicPetData({ ...args })
    if (generationDepth > 0) {
        petData.parents = {
            create: [
                generateRelatedPetData({
                    ...args,
                    generationDepth: generationDepth - 1,
                    sex: 'FEMALE',
                }),
                generateRelatedPetData({
                    ...args,
                    generationDepth: generationDepth - 1,
                    sex: 'MALE',
                }),
            ]
        }
    }
    return petData
}