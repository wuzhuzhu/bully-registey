import { cache } from "react"
import { unstable_cache } from "next/cache"

import db from '@/lib/prisma'
import { get } from "http"
import type { Prisma } from "@prisma/client"

export const revalidate = 3600 // revalidate the data at most every hour

export const getPetsNoCache = async ({
    skip = 0,
    take = 3000,
    include,
    orderBy = { createdAt: 'desc' },
    ...args
}: Prisma.PetFindManyArgs = {}) => {
    console.log('getPetsNoCache', args)
    const pets = await db.pet.findMany({
        ...args,
        skip,
        take,
        include: args.select ? undefined : {
            kennel: true,
            registration: true,
            createdBy: true,
            parents: {
                include: {
                    avatar: true,
                }
            },
            ...include,
        },
        orderBy
    })
    // console.log('getPets', pets)
    return pets
}

export const getPets = unstable_cache(getPetsNoCache,
    ['pets'], // this line is not for revalidate tag
    {
        revalidate,
        tags: ['pets', 'kennels', 'registrations'] // this one works
    })

const getPetFamilyDepth = cache(async (id: string, depth = 1) => {
    let includeObject: any = {
        include: { parents: true }
    }
    let pointer = includeObject.include;
    for (let i = 0; i < depth - 1; i++) {
        pointer.parents = { include: { children: true } };
        pointer = pointer.children.include;
    }

    return db.pet.findMany({
        where: {
            id
        },
        include: includeObject.include
    });
})

export const getPetById = unstable_cache(async (id: string) => {
    const pet = await db.pet.findUnique({
        where: {
            id
        },
        include: {
            kennel: {
                include: {
                    profile: true,
                }
            },
            parents: {
                include: {
                    avatar: {
                        select: {
                            url: true
                        }
                    },
                }
            },
            children: true,
            avatar: true,
            img: true,
            registration: true,
        }

    })
    console.log('getPetById', { pet })
    return pet
}, ['pet'], {
    revalidate,
    tags: ['pet', 'file', 'kennel', 'registration']
})

export const getPetWithAncestorById = unstable_cache(async (id: string) => {
    const pet = await db.pet.findUnique({
        where: {
            id
        },
        include: {
            kennel: {
                include: {
                    profile: true,
                }
            },
            parents: {
                select: {
                    id: true,
                    name: true,
                    nameEn: true,
                    gender: true,
                    avatar: {
                        select: {
                            url: true
                        }
                    },
                    registration: {
                        select: {
                            status: true,
                        }
                    },
                    parents: {
                        select: {
                            id: true,
                            name: true,
                            nameEn: true,
                            gender: true,
                            avatar: {
                                select: {
                                    url: true
                                }
                            },
                            registration: {
                                select: {
                                    status: true,
                                }
                            },
                            parents: {
                                select: {
                                    id: true,
                                    name: true,
                                    nameEn: true,
                                    gender: true,
                                    avatar: {
                                        select: {
                                            url: true
                                        }
                                    },
                                    registration: {
                                        select: {
                                            status: true,
                                        }
                                    },
                                }
                            }
                        }
                    }
                },
            },
            children: true,
            avatar: true,
            img: true,
            registration: true,
        }

    })
    console.log('getPetWithAncestorById', { pet })
    return pet
}, ['pet-ancestor'], {
    revalidate,
    tags: ['pet', 'file', 'kennel', 'registration']
})