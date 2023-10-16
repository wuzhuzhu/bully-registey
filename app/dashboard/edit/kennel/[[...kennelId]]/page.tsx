import { get, isEmpty } from 'lodash-es'
import { getKennelById } from '@/lib/queries/kennel'

import KennelForm from './kennel-form'

const KennelEditPage = async ({ params }: { params: { kennelId?: string[] } }) => {
    let kennel
    if (params && params?.kennelId! && params?.kennelId[0]) {
        kennel = await getKennelById(params?.kennelId[0])
    }
    return (
        <div className="space-y-4">
            <h2 className="text-lg">{!isEmpty(params?.kennelId) ? `修改犬舍${kennel?.name}的信息` : '新建犬舍'}</h2>
            <KennelForm kennel={kennel} />
        </div>
    )
}

export default KennelEditPage