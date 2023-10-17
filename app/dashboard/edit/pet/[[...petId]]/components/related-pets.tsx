'use client'
// import { useQuery } from '@tanstack/react-query'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pet } from '@prisma/client'
import { PetWithRelations } from '@/prisma/generated/zod'
import { get, pickBy } from 'lodash-es'
import ParentSelect from "./parent-select"
import { useQuery } from "@tanstack/react-query"

// fetch in client component with react query
// https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/
async function getPets() {
    return (await fetch("/api/pets").then(
        (res) => res.json()
    )) as Pet[];
}

const RelatedPets = ({ pet }: {
    pet?: Nullable<PetWithRelations>
}) => {
    const { data: pets } = useQuery<Pet[]>({
        queryKey: ["stream-hydrate-pets"],
        queryFn: () => getPets(),
        suspense: true,
        staleTime: 5 * 1000,
    });

    const { parents } = pet || {}
    const dad = pickBy(parents, (value) => value.gender === 'MALE')
    const mom = pickBy(parents, (value) => value.gender === 'FEMALE')
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
                    <ParentSelect currentPet={dad} pets={pets} />
                </div>
            </div>
            {/* 妈妈 */}
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={dad?.avatar?.url || "/img/female-avatar.svg"} />
                        <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <ParentSelect currentPet={dad} pets={pets} />
                </div>

            </div>
        </div>
    )
}

export default RelatedPets