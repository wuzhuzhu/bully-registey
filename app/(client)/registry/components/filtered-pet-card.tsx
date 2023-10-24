import { DEFAULT_PET_AVATAR_URL } from '@/lib/constants'
import { PetWithRelations } from '@/prisma/generated/zod'
import Image from 'next/image'
import { GenderIcon } from '@/components/generated/GenderIcon'
import Link from 'next/link'

const FilteredPetCard = ({
    pet
}: {
    pet: PetWithRelations
}) => {
    return (
        <Link href={`/registry/${pet?.id}`} className="flex h-20 rounded-xl border border-zinc-700 justify-center items-center inline-flex w-full gap-4 pl-4 bg-m3sysdarksurface-container-highest">
            <div className="w-10 h-10 left-0 top-0 bg-amber-300 rounded-full">
                <GenderIcon gender={pet?.gender?.toLowerCase()}></GenderIcon>
            </div>
            <div className="flex-1 truncate flex flex-col gap-1">
                <div className="self-stretch text-stone-300 font-m3-title-medium leading-normal tracking-tight truncate">{[pet?.name, pet?.nameEn].join(" ")}</div>
                <div className="text-stone-300 font-m3-body-medium leading-tight tracking-tight truncate">No. {pet.registration?.readableId}</div>
            </div>
            <Image
                alt='pet avatar'
                width={80} height={80}
                className="w-20 h-20 rounded-r-xl"
                src={pet?.avatar?.url || DEFAULT_PET_AVATAR_URL}
            />
        </Link>
    )
}

export default FilteredPetCard