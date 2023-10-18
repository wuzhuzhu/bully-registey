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
import { cn, getParentFromParents } from "@/lib/utils"
import { useCommandState } from 'cmdk'

import {
    DialogTrigger
} from "@/components/ui/dialog"
import {
    PopoverTrigger
} from "@/components/ui/popover"
import { DEFAULT_PET_AVATAR_URL } from "@/lib/constants"
import { X } from "lucide-react"
import { GenderType, Pet, PetWithRelations } from "@/prisma/generated/zod"
import { find } from "lodash-es"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface PetSwitcherProps extends PopoverTriggerProps { }

const CommandContent = (props: PetSwitcherProps & {
    currentPet: PetWithRelations | undefined
    pets: PetWithRelations[]
    gender: GenderType
    setshowNewPetDialog: (show: boolean) => void
    setSelectedPet: (pet: PetWithRelations | undefined) => void
    selectedPet: PetWithRelations | undefined
    open: boolean
    setOpen: (open: boolean) => void
}) => {
    const {
        className,
        currentPet,
        pets,
        gender,
        setshowNewPetDialog,
        setSelectedPet,
        selectedPet,
        open,
        setOpen
    } = props
    const search = useCommandState((state) => state.search)
    const [listPets, setListPets] = useState<{ value?: string, label?: string }[]>([])

    const parent = getParentFromParents(currentPet?.parents, gender);

    useEffect(() => {
        console.log('#######3 重新过滤', { pets, search })
        // console.log({ search }, search === '')
        if (pets?.length) {
            const newListPets = pets
                .filter(pet => pet?.name?.includes(search))
                .map((pet) => ({ value: pet.id, label: pet.name }))
            newListPets.unshift({ value: 'DELETE', label: '删除关联' })
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
                    {listPets?.length > 0 && listPets.map((pet) => (
                        <CommandItem
                            key={pet.value}
                            onSelect={() => {
                                setSelectedPet(pet.value)
                                setOpen(false)
                            }}
                            className="text-sm"
                        >
                            <Avatar className="mr-2 h-5 w-5">
                                {pet?.value !== 'DELETE'
                                    ? <>
                                        <AvatarImage
                                            src={pet?.avatar?.url || DEFAULT_PET_AVATAR_URL}
                                            alt={pet.label}
                                            className="grayscale"
                                        />
                                        <AvatarFallback>图</AvatarFallback>
                                    </>
                                    : <X />}

                            </Avatar>
                            {pet.label}
                            <CheckIcon
                                className={cn(
                                    "ml-auto h-4 w-4",
                                    selectedPet?.value === pet.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                )}
                            />
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
                <CommandGroup>
                    <DialogTrigger asChild>
                        <CommandItem
                            onSelect={() => {
                                setOpen(false)
                                setshowNewPetDialog(true)
                            }}
                        >
                            <PlusCircledIcon className="mr-2 h-5 w-5" />
                            Create Team
                        </CommandItem>
                    </DialogTrigger>
                </CommandGroup>
            </CommandList>
        </>
    )
}

export default CommandContent