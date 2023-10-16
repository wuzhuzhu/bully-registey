import { getPets } from '@/lib/queries/pet'

import React from 'react'
import DeleteBtn from './delete-btn'
import { getKennels } from '@/lib/queries/kennel'

const ExampleValidataDogPage = async () => {
    const kennels = await getKennels({ take: 100 })
    return (
        <div>
            <p>ExampleValidataPage</p>
            <ol>
                {kennels && kennels.length !== 0 && kennels.map((kennel, i) => {
                    return (
                        <li key={kennel.id} className='flex gap-4'>
                            <p>{i + 1}.</p>
                            <p>{kennel.name}: {kennel._count.pets}</p>
                            <DeleteBtn id={kennel.id} />
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default ExampleValidataDogPage
