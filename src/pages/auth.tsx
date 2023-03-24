import React from "react";
import { SignIn, useUser, SignOutButton, SignedOut } from "@clerk/nextjs";

const AuthPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="mb-3 text-center text-2xl font-bold text-blue-700">
          AuthPage
        </h1>
        <SignedOut>
          <SignIn redirectUrl={"/"} />
        </SignedOut>
      </div>
    </div>
  );
};

export default AuthPage;
