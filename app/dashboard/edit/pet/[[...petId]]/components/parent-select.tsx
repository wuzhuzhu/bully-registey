"use client"

import {
    CaretSortIcon
} from "@radix-ui/react-icons"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Command } from "@/components/ui/command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { GenderType, PetWithRelations } from "@/prisma/generated/zod"
import { useMutation } from "@tanstack/react-query"
import CommandContent from "./command-content"

import { post } from "@/lib/utils"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface PetSwitcherProps extends PopoverTriggerProps { }

export default function ParentSelect(props: PetSwitcherProps & {
    currentPet?: PetWithRelations | undefined
    pets?: PetWithRelations[] | []
    gender: GenderType
    parent?: PetWithRelations | undefined
    connectMutation: ReturnType<typeof useMutation>
}) {
    const {
        className,
        currentPet,
        pets,
        gender,
        parent
    } = props

    const [selectedPet, setSelectedPet] = useState<PetWithRelations>(
        parent?.id ? { label: parent?.name, value: parent?.id } : undefined
    )
    const [open, setOpen] = useState(false)

    const [showNewPetDialog, setShowNewPetDialog] = useState(false)

    return (
        <Dialog open={showNewPetDialog} onOpenChange={setShowNewPetDialog}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a team"
                        className={cn("w-[200px] justify-between", className)}
                    >
                        {selectedPet?.label || '选择/创建'}
                        <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command
                        shouldFilter={false}
                    >
                        <CommandContent {...props} {
                            ...{
                                setShowNewPetDialog,
                                setSelectedPet,
                                selectedPet,
                                open,
                                setOpen
                            }
                        }
                        />
                    </Command>
                </PopoverContent>
            </Popover>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create team</DialogTitle>
                    <DialogDescription>
                        Add a new team to manage products and customers.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="space-y-4 py-2 pb-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Team name</Label>
                            <Input id="name" placeholder="Acme Inc." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="plan">Subscription plan</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="free">
                                        <span className="font-medium">Free</span> -{" "}
                                        <span className="text-muted-foreground">
                                            Trial for two weeks
                                        </span>
                                    </SelectItem>
                                    <SelectItem value="pro">
                                        <span className="font-medium">Pro</span> -{" "}
                                        <span className="text-muted-foreground">
                                            $9/month per user
                                        </span>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setShowNewPetDialog(false)}>
                        Cancel
                    </Button>
                    <Button type="submit">Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
