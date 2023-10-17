import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const RelatedPets = () => {
    return (
        <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/img/male-avatar.svg" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none">
                            Olivia Martin
                        </p>
                        <p className="text-sm text-muted-foreground">m@example.com</p>
                    </div>
                </div>
                <Select defaultValue="edit">
                    <SelectTrigger className="ml-auto w-[110px]">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="edit">Can edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/img/male-avatar.svg" />
                        <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none">
                            Isabella Nguyen
                        </p>
                        <p className="text-sm text-muted-foreground">b@example.com</p>
                    </div>
                </div>
                <Select defaultValue="view">
                    <SelectTrigger className="ml-auto w-[110px]">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="edit">Can edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default RelatedPets