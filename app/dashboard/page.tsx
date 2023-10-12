import React from 'react'
import { getServerSessionWithOption } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const DashboardHomePage = async () => {
    const session = await getServerSessionWithOption()
    return (
        <div>
            <h1>Dashboard Home Page

                <p>{session ? session?.user?.name : 'no session'}</p>

                <Button asChild>
                    <Link href='/dashboard/example/protected'>
                        go to protected page
                    </Link>
                </Button>

            </h1>
        </div>
    )
}

export default DashboardHomePage