'use client'
// import { useQuery } from '@tanstack/react-query'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pet, type Prisma } from '@prisma/client'
import type { GenderType } from '@/prisma/generated/zod'
import { PetWithRelations } from '@/prisma/generated/zod'
import { find, get, pickBy } from 'lodash-es'
import ParentSelect from "./parent-select"
import { useQuery } from "@tanstack/react-query"

import { getParentFromParents } from "@/lib/utils"
import CommandMenu from "./example"

// fetch in client component with react query
// https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/
// TODO: 区分pets的性别，分别查询
async function getPets(gender: GenderType) {
    // get current host and combine with api path
    // const res = await fetch(`${window.location.origin}/api/pets`)
    let base_url =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://bullyregistry.cn";

    return (await fetch(`${base_url}/api/pets?gender=${gender}&scene=parent-list`).then(
        (res) => res.json()
    )) as Pet[];
}

const RelatedPets = ({ pet }: {
    pet?: Nullable<PetWithRelations>
}) => {
    const { data: malePets } = useQuery<Pet[]>({
        queryKey: ["stream-hydrate-pets"],
        queryFn: () => getPets('MALE'),
        // @ts-ignore
        suspense: true,
        staleTime: 5 * 1000,
    });
    const { data: femalePets } = useQuery<Pet[]>({
        queryKey: ["stream-hydrate-pets"],
        queryFn: () => getPets('FEMALE'),
        // @ts-ignore
        suspense: true,
        staleTime: 5 * 1000,
    });

    const dad = getParentFromParents(pet?.parents, 'MALE');
    const mom = getParentFromParents(pet?.parents, 'FEMALE');
    // debugger
    console.log({ dad, mom, femalePets, malePets })
    return (
        <div className="grid gap-6">
            {/* <p className="w-[200px] flex-wrap">{JSON.stringify(pet?.parents)}</p> */}
            {/* <p className="w-[200px] flex-wrap">{JSON.stringify(data)}</p> */}
            {/* 爸爸 */}
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={dad?.avatar?.url || "/img/male-avatar.svg"} />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <ParentSelect currentPet={pet} pets={malePets} gender='MALE' />
                </div>
            </div>
            {/* 妈妈 */}
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={dad?.avatar?.url || "/img/female-avatar.svg"} />
                        <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <ParentSelect currentPet={pet} pets={femalePets} gender='FEMALE' />
                </div>

            </div>
        </div>
    )
}

export default RelatedPets