'use client'

import { Button } from "@/components/ui/button"
import { whoAmI } from "@/lib/actions"
import React from "react"


const ServerActionPage = () => {
    const [name, setName] = React.useState<string | null | undefined>('')
    return (
        <div>
            <p>{name || '尚未设置姓名'}</p>
            <Button className="block" onClick={ // client component
                async () => {
                    const res = await whoAmI()
                    setName(res)
                }
            }
            >
                设置姓名
            </Button>
            <Button className="block" onClick={ // client component
                () => setName('')
            }
            >
                重置
            </Button>
        </div >
    )
}

export default ServerActionPage