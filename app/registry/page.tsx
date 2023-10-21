

import { GenderedCardDark } from "@/components/generated/GenderedCardDark";
import { SegmentedButton } from "@/components/generated/SegmentedButton/SegmentedButton";
import { Input } from "@/components/ui/input";
import { DEFAULT_PET_AVATAR_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { PetWithRelations } from "@/prisma/generated/zod";
import { AlignJustify, Search } from "lucide-react";
import { redirect } from "next/navigation";
import db from '@/lib/prisma'
import { Button } from "@/components/ui/button";
import { PageProps } from "@/.next/types/app/page";
import { getPets } from "@/lib/queries/pet";
import FilteredPetCard from '@/app/registry/components/filtered-pet-card'

const SearchPage = async ({ searchParams }: PageProps) => {
    let pets = [] as PetWithRelations[]
    if (searchParams?.keyword) {
        // get all pets that match the keyword name and whom registration status approved
        pets = await getPets({
            where: {
                name: searchParams.keyword,
                // 模糊搜索需要分页 暂时不做
                // name: {
                //     contains: searchParams.keyword 
                // },
                registration: {
                    status: 'APPROVED'
                }
            },
            include: {
                registration: true,
                avatar: true
            }
        })
    }
    async function onSubmit(formData: FormData) {
        'use server'
        // we just use form behavior to get the value of the input
        console.log({ formData })
    }
    return (
        <>
            <div className="flex flex-col w-full items-center">
                <SegmentedButton
                    className=""
                    isSelectLeft={true}
                />
                <form className="w-full" onSubmit={onSubmit}>
                    <div
                        className={cn(
                            'mt-4 relative flex h-[56px] w-full items-center gap-[4px] overflow-hidden rounded-[28px] bg-m3sysdarksurface-container-high',
                        )}
                    >
                        <AlignJustify className='text-m3sysdarkon-surface-variant my-2 ml-4' />

                        <Input className="" placeholder='输入完整关键字..' type="text" name="keyword" mode='client'
                        />
                        <Button type="submit" variant="ghost" size="icon" className="mr-4">
                            <Search className='text-m3sysdarkon-surface-variant' />
                        </Button>

                    </div>
                </form>
                <div className="w-full inline-flex flex-col items-center gap-[8px] mt-6">
                    {pets.length > 0 && pets.map((pet) => (
                        <FilteredPetCard key={`filtered-pet-${pet.id}`} pet={pet} />
                        // <GenderedCardDark
                        //     key={`filtered-pet-${pet.id}`}
                        //     mediaClassName={`bg-[url(${pet?.avatar?.url || DEFAULT_PET_AVATAR_URL})]`}
                        //     style="filled"
                        //     subheadClassName="!whitespace-nowrap ![text-align:unset] !w-fit"
                        //     text={pet?.name}
                        //     text1={`CBR No.: ${pet?.registration?.readableId}`}
                        // />
                    ))}
                </div>
            </div>

        </>
    );
};

export default SearchPage;