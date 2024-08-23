// import type { NextApiRequest, NextApiResponse } from "next";

import * as NextAuth from "next-auth";
import NextAuth_next from "next-auth/next";
import { provider_credentials } from "./provider-credential";

const authOptions: NextAuth.AuthOptions = {
  providers: [provider_credentials],
  session: { strategy: "jwt", maxAge: 60 * 60 * 10 },
  // pages: { signOut: "/login" },
};

const handler = NextAuth_next(authOptions);

// function auth(request: NextApiRequest, responde: NextApiResponse) {
//   return await NextAuth(request, response, {});
// }

export { handler as GET, handler as POST };
