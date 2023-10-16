import { Ban, Check, Loader, Pause } from 'lucide-react';
export const DEPLOY_URL = `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent&project-name=precedent&repository-name=precedent&demo-title=Precedent&demo-description=An%20opinionated%20collection%20of%20components%2C%20hooks%2C%20and%20utilities%20for%20your%20Next%20project.&demo-url=https%3A%2F%2Fprecedent.dev&demo-image=https%3A%2F%2Fprecedent.dev%2Fopengraph-image&env=GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent%2Fblob%2Fmain%2F.env.example&stores=%5B%7B"type"%3A"postgres"%7D%5D`;

export const TRANSLATION_MAP = {
    gender: {
        MALE: '男',
        FEMALE: '女',
    },
}

export const REGISTRATION_STATUS = {
    PENDING: {
        label: '未申请',
        icon: Loader,
    },
    APPROVED: {
        label: '已批准',
        icon: Check,
    },
    REJECTED: {
        label: '已拒绝',
        icon: Ban,
    },
    SUSPENDED: {
        label: '已暂停',
        icon: Pause,
    },
}
