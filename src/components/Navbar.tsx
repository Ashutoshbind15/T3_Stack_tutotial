import React from "react";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky flex flex-row items-center justify-between bg-neutral-800 py-2 px-4 text-white">
      <div>Navbar</div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href={"/auth"}>Signin</Link>
      </SignedOut>
    </div>
  );
};

export default Navbar;
