import { getPets } from '@/lib/queries/pet'

import React from 'react'
import DeleteBtn from './delete-btn'
import { getKennels } from '@/lib/queries/kennel'

const ExampleValidataDogPage = async () => {
    const pets = await getPets({ take: 100 })
    const kennels = await getKennels({ take: 100 })
    return (
        <div>
            <p>ExampleValidataPage</p>
            <ol>
                {pets && pets.length !== 0 && pets.map((pet, i) => {
                    return (
                        <li key={pet.id} className='flex gap-4'>
                            <p>{i + 1}.</p>
                            <p>{pet.name}: {pet.kennel?.name}</p>
                            <DeleteBtn id={pet.id} />
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default ExampleValidataDogPage
