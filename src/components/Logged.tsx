"use client";
import * as NextAuth_react from "next-auth/react";

export function Logged() {
  const session = NextAuth_react.useSession();
  return (
    <div>
      {session?.data ? (
        <button
          onClick={() => NextAuth_react.signOut()}
          style={{ backgroundColor: "red" }}
        >
          Log out
        </button>
      ) : null}
    </div>
  );
}
