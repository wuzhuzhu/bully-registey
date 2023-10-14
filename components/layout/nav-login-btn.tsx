'use client'

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const NavLoginBtn = () => {
    return (
        <Button
            variant='outline'
            onClick={() => signIn()}
        >
            登陆
        </Button>
    )
}

export default NavLoginBtn