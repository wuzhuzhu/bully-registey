import { whoAmI } from '@/lib/actions'

const CreateKennelPage = async () => {
    const name = await whoAmI()
    // console.log(name)
    return (
        <div>
            <h1>whoami: {name}</h1>
        </div>
    )
}

export default CreateKennelPage