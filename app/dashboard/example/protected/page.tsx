import { getServerSessionWithOption } from "@/lib/utils"
import { redirect } from "next/navigation"

const ProtectPage = async () => {
    const session = await getServerSessionWithOption()
    if (!session || !session.user) {
        redirect('/api/auth/signin')
    }
    return (
        <div>只有登录才有可能看得到的内容</div>
    )
}

export default ProtectPage