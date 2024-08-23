"use client";
import * as NextAuth_react from "next-auth/react";

export default function Home() {
  const session = NextAuth_react.useSession();
  return (
    <main>
      Dashboard
      <div>
        {session ? (
          <pre>{JSON.stringify(session, null, 2)}</pre>
        ) : (
          "You are not logged"
        )}
      </div>
    </main>
  );
}
