

import { PageProps } from "@/.next/types/app/page";
import FilteredPetCard from '@/app/(client)/registry/components/filtered-pet-card';
import { SegmentedButton } from "@/components/generated/SegmentedButton/SegmentedButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPets } from "@/lib/queries/pet";
import { cn } from "@/lib/utils";
import { PetWithRelations } from "@/prisma/generated/zod";
import { AlignJustify, Search } from "lucide-react";

const SearchPage = async ({ searchParams, mode = "name" }: PageProps & { mode: 'chip' | 'name' }) => {
    let pets = [] as PetWithRelations[]
    if (searchParams?.keyword) {
        // get all pets that match the keyword name and whom registration status approved
        pets = await getPets({
            where: {
                OR: mode === 'name'
                    ? [
                        {
                            name: searchParams.keyword
                        },
                        {
                            nameEn: searchParams.keyword
                        }
                    ]
                    : undefined,
                // 模糊搜索需要分页 暂时不做
                // name: {
                //     contains: searchParams.keyword 
                // },
                registration: {
                    status: 'APPROVED',
                    readableId: mode === 'chip' ? searchParams.keyword : undefined
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
    }
    return (
        <>
            <div className="flex flex-col w-full items-center">
                <SegmentedButton
                    className=""
                    isSelectLeft={mode === 'name'}
                />
                <form className="w-full" onSubmit={onSubmit}>
                    <div
                        className={cn(
                            'mt-4 relative flex h-[56px] w-full items-center gap-[4px] overflow-hidden rounded-[28px] bg-m3sysdarksurface-container-high',
                        )}
                    >
                        <AlignJustify className='text-m3sysdarkon-surface-variant my-2 ml-4' />

                        <Input className="" placeholder={searchParams?.keyword || '输入完整关键字..'} type="text" name="keyword" mode='client'
                        />
                        <Button type="submit" variant="ghost" size="icon" className="mr-4">
                            <Search className='text-m3sysdarkon-surface-variant' />
                        </Button>

                    </div>
                </form>
                <div className="w-full inline-flex flex-col items-center gap-[8px] mt-6">
                    {pets.length === 0 && searchParams?.keyword && <p className="mx-auto my-8 text-m3sysdarkon-surface">
                        找不到符合条件的注册,请输入完整关键字
                    </p>}
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