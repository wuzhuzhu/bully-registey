'use client'
import { deletePetById } from '@/lib/actions'

const DeleteBtn = ({ id }: { id: string }) => {
    return (
        <button onClick={() => deletePetById(id)}>delete</button>
    )
}

export default DeleteBtn