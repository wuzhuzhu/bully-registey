
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
// import useScroll from "@/lib/hooks/use-scroll";
import authOptions from "@/app/api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth";
import UserDropdown from "./user-dropdown";
import NavLoginBtn from "./nav-login-btn";

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  // const scrolled = useScroll(50);

  return (
    <>
      <div className="z-10 fixed top-0 w-full flex justify-center border-b border-gray-200 bg-white/50 backdrop-blur-xl"
      >
        <div className="mx-5 flex h-16 items-center justify-between w-full">
          <div className="flex gap-4">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/img/logo.png"
                alt="CBR logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <h4 className="text-lg font-semibold tracking-tight text-zinc-800">BULLY REGISTRY</h4>
            </Link>
            <MainNav className="mx-6" />
          </div>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <NavLoginBtn />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
