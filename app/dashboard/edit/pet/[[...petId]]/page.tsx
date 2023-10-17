import { get, isEmpty } from 'lodash-es'
import { getPetById } from '@/lib/queries/pet'
import PetForm from './pet-form'
import { getServerSessionWithOption } from '@/lib/utils'

const PetEditPage = async ({ params }: { params: { petId?: string[] } }) => {
    let pet
    if (params && params?.petId! && params?.petId[0]) {
        pet = await getPetById(params?.petId[0])
    }

    const session = await getServerSessionWithOption()

    return (
        <div className="space-y-4">
            <h2 className="text-lg">{!isEmpty(params?.petId) ? `修改${pet?.name}的信息` : '注册: 犬'}</h2>
            <PetForm pet={pet} session={session} />
        </div>
    )
}

export default PetEditPage