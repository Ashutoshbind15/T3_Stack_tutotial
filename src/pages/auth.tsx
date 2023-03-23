import React from "react";
import { SignIn, useUser, SignOutButton, SignedOut } from "@clerk/nextjs";

const AuthPage = () => {
  return (
    <div>
      <h1 className="">AuthPage</h1>

      <SignedOut>
        <SignIn redirectUrl={"/"} />
      </SignedOut>
    </div>
  );
};

export default AuthPage;
