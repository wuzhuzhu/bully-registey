'use client'
// import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { GenderType } from '@/prisma/generated/zod'
import { PetWithRelations } from '@/prisma/generated/zod'
import { Pet } from '@prisma/client'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import ParentSelect from "./parent-select"

import { deleteFetch, getParentFromParents, post } from "@/lib/utils"
import { revalidatePath, revalidateTag } from "next/cache"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

// fetch in client component with react query
// https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/
async function getPets(gender: GenderType) {
    // get current host and combine with api path
    // const res = await fetch(`${window.location.origin}/api/pets`)

    return (await fetch(`/api/pets?gender=${gender}&scene=parent-list`).then(
        (res) => res.json()
    )) as Pet[];

    type petOption = { value: string, label: string }
}

const RelatedPets = ({ pet }: {
    pet?: Nullable<PetWithRelations>
}) => {
    const queryClient = useQueryClient()
    const router = useRouter()
    const { toast } = useToast()

    const [malePets, setMalePets] = React.useState([{ a: 1 }])
    const [femalePets, setFemalePets] = React.useState([])
    useEffect(() => {
        fetch('/api/pets?gender=MALE&scene=parent-list')
            .then(res => res.json())
            .then(res => {
                setMalePets(res)
            })
        fetch('/api/pets?gender=FEMALE&scene=parent-list')
            .then(res => res.json())
            .then(res => setFemalePets(res))
    }, [])
    /*  const { data: malePets } = useQuery<Pet[]>({
         queryKey: ["pets/male"],
         queryFn: () => getPets('MALE'),
         // @ts-ignore
         suspense: true,
         staleTime: 5 * 1000,
     });
     const { data: femalePets } = useQuery<Pet[]>({
         queryKey: ["pets/female"],
         queryFn: () => getPets('FEMALE'),
         // @ts-ignore
         suspense: true,
         staleTime: 5 * 1000,
     }); */
    type petOption = { value: string, label: string }
    const connectMutation = useMutation({
        mutationFn: async ({ newParentOption, gender }: {
            newParentOption: petOption,
            gender: GenderType
        }) => {
            // console.log('connectMutation', { newParentOption, gender })
            return post(`/api/pets/${pet?.id}/connect`, {
                parent: {
                    id: newParentOption.value,
                    gender
                }
            })
        },
        onSuccess: () => {
            // window.location.reload()
            router.refresh()
            toast({
                title: "添加成功",
                description: "已经添加到父母列表",
            })
        },
    });
    const removeConnectMutation = useMutation({
        mutationFn: async ({ gender }: {
            newParentOption: petOption,
            gender: GenderType
        }) => {
            return post(`/api/pets/${pet?.id}/disconnect`, { gender })
        },
        onSuccess: () => {
            router.refresh()
            toast({
                title: "移出成功",
                description: "已经从父母列表移出",
            })
        },
    });

    const dad = getParentFromParents(pet?.parents, 'MALE');
    const mom = getParentFromParents(pet?.parents, 'FEMALE');
    // debugger
    // console.log({ dad, mom, femalePets, malePets })
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
                    <ParentSelect
                        currentPet={pet}
                        parent={dad}
                        pets={malePets}
                        gender='MALE'
                        connectMutation={connectMutation}
                        removeConnectMutation={removeConnectMutation}
                    />
                </div>
            </div>
            {/* 妈妈 */}
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={mom?.avatar?.url || "/img/female-avatar.svg"} />
                        <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <ParentSelect
                        currentPet={pet}
                        parent={mom}
                        pets={femalePets}
                        gender='FEMALE'
                        connectMutation={connectMutation}
                        removeConnectMutation={removeConnectMutation} />
                </div>

            </div>
        </div>
    )
}

export default RelatedPets