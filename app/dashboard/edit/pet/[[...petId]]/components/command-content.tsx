"use client"

import {
    CheckIcon,
    PlusCircledIcon
} from "@radix-ui/react-icons"
import { useEffect, useState } from "react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { useCommandState } from 'cmdk'

import {
    DialogTrigger
} from "@/components/ui/dialog"
import {
    PopoverTrigger
} from "@/components/ui/popover"
import { DEFAULT_PET_AVATAR_URL } from "@/lib/constants"
import type { PetOption } from "@/lib/types"
import { GenderType, PetWithRelations } from "@/prisma/generated/zod"
import { useMutation } from "@tanstack/react-query"
import { X } from "lucide-react"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>
interface PetSwitcherProps extends PopoverTriggerProps { }

const CommandContent = (props: PetSwitcherProps & {
    currentPet: PetWithRelations | undefined
    pets: PetWithRelations[]
    gender: GenderType
    setShowNewPetDialog: (show: boolean) => void
    setSelectedPet: (pet: petOption | undefined) => void
    selectedPet: PetWithRelations | undefined
    open: boolean
    setOpen: (open: boolean) => void
    parent?: PetWithRelations | undefined
    connectMutation: ReturnType<typeof useMutation>
    removeConnectMutation: ReturnType<typeof useMutation>
}) => {
    const {
        className,
        currentPet,
        pets,
        gender,
        setShowNewPetDialog,
        setSelectedPet,
        selectedPet,
        open,
        setOpen,
        parent,
        connectMutation,
        removeConnectMutation
    } = props
    const search = useCommandState((state) => state.search)
    const [listPets, setListPets] = useState<PetOption[]>([])

    const deletePetOption = { value: 'DELETE', label: '删除关联' }

    useEffect(() => {
        console.log('#######3 重新过滤', { pets, search })
        // console.log({ search }, search === '')
        if (pets?.length) {
            const newListPets = pets
                .filter(pet => pet?.name?.includes(search))
                .map((pet) => ({ value: pet.id, label: pet.name }))
            newListPets.unshift(deletePetOption)
            setListPets(newListPets)
        }
    }, [search])

    // TODO: 修好选择器
    return (
        <>
            <CommandList>
                <CommandInput placeholder="搜索名字..." />
                <CommandEmpty>没有找到.</CommandEmpty>
                <CommandGroup key='all' heading='可选的'>
                    {listPets?.length > 0 && listPets.map((petOption) => (
                        <CommandItem
                            key={petOption.value}
                            onSelect={() => {
                                if (petOption.value === 'DELETE') {
                                    removeConnectMutation.mutate({
                                        gender
                                    })
                                    setSelectedPet({})
                                } else {
                                    connectMutation.mutate({
                                        newParentOption: petOption,
                                        gender
                                    })
                                    setSelectedPet(petOption)
                                }
                                setOpen(false)
                            }}
                            className="text-sm"
                        >
                            <Avatar className="mr-2 h-5 w-5">
                                {petOption?.value !== 'DELETE'
                                    ? <>
                                        <AvatarImage
                                            src={petOption?.avatar?.url || DEFAULT_PET_AVATAR_URL}
                                            alt={petOption.label}
                                            className="grayscale"
                                        />
                                        <AvatarFallback>图</AvatarFallback>
                                    </>
                                    : <X />}

                            </Avatar>
                            {petOption.label}
                            <CheckIcon
                                className={cn(
                                    "ml-auto h-4 w-4",
                                    selectedPet?.value === petOption.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                )}
                            />
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList >
            <CommandSeparator />
            <CommandList>
                <CommandGroup>
                    <DialogTrigger asChild>
                        <CommandItem
                            onSelect={() => {
                                setOpen(false)
                                setShowNewPetDialog(true)
                            }}
                        >
                            <PlusCircledIcon className="mr-2 h-5 w-5" />
                            新创建(未做)
                        </CommandItem>
                    </DialogTrigger>
                </CommandGroup>
            </CommandList>
        </>
    )
}

export default CommandContent