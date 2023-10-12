"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";

export default function NavBar() {
  const { data: session } = useSession();
  const scrolled = useScroll(50);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-center border-b border-gray-200 bg-white/50 backdrop-blur-xl"
      >
        <div className="mx-5 flex h-16 items-center justify-between w-full">
          <div className="flex gap-">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/img/logo.png"
                alt="CBR logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <p className="text-lg">China Bully Registry</p>
            </Link>
            <MainNav className="mx-6" />
          </div>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => signIn()}
              >
                登陆
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
