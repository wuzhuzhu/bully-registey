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
import type { PetOption } from "@/lib/types"
import { GenderType, PetWithRelations } from "@/prisma/generated/zod"
import { useMutation } from "@tanstack/react-query"
import CommandContent from "./command-content"


type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface PetSwitcherProps extends PopoverTriggerProps { }

export default function ParentSelect(props: PetSwitcherProps & {
    currentPet?: PetWithRelations | undefined
    pets?: PetWithRelations[] | []
    gender: GenderType
    parent?: PetWithRelations | undefined
    connectMutation: ReturnType<typeof useMutation>
    removeConnectMutation: ReturnType<typeof useMutation>
}) {
    const {
        className,
        currentPet,
        pets,
        gender,
        parent
    } = props

    const [selectedPet, setSelectedPet] = useState<PetOption>(
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
                        {selectedPet?.label || '选择'}
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
                    <DialogTitle>此处为潜在优化项示例</DialogTitle>
                    <DialogDescription>
                        在这里快捷添加一个新的犬只注册,并关联到当前犬只的父母
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="space-y-4 py-2 pb-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">名字</Label>
                            <Input id="name" placeholder="输入名字" />
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
                        取消
                    </Button>
                    <Button type="submit" disabled>继续</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
