import { get, isEmpty } from 'lodash-es'
import { getPetById } from '@/lib/queries/pet'
import PetForm from './pet-form'
import { getServerSessionWithOption } from '@/lib/utils'
import { getKennelsSimple } from '@/lib/queries/kennel'

const PetEditPage = async ({ params }: { params: { petId?: string[] } }) => {
    let pet
    if (params && params?.petId! && params?.petId[0]) {
        pet = await getPetById(params?.petId[0])
    }
    const kennels = await getKennelsSimple()

    const session = await getServerSessionWithOption()

    return (
        <div className="space-y-4">
            <h2 className="text-lg">{!isEmpty(params?.petId) ? `修改${pet?.name}的信息` : '注册: 犬'}</h2>
            <PetForm pet={pet} session={session} kennels={kennels} />
        </div>
    )
}

export default PetEditPage