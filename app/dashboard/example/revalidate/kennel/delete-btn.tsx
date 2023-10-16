'use client'
import { deleteKennelById } from '@/lib/actions'

const DeleteBtn = ({ id }: { id: string }) => {
    return (
        <button onClick={() => deleteKennelById(id)}>delete</button>
    )
}

export default DeleteBtn