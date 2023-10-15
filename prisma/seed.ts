// generate several prisma db seed based on ./schema.prisma

import { PrismaClient } from '@prisma/client';
import { fakerZH_CN as f } from '@faker-js/faker'

import type { PetType, Gender } from '@prisma/client' // 处理enum

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