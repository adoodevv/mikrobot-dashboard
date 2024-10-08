import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import prismadb from "@/lib/prismadb";  // Use '@/' to ensure correct imports

const handler = NextAuth({
   providers: [
      Credentials({
         id: "credentials",
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
               throw new Error("Email and password are required");
            }

            const user = await prismadb.user.findUnique({
               where: { email: credentials.email },
            });

            if (!user || !user.hashedPassword) {
               throw new Error("Invalid email or password");
            }

            const passwordsMatch = await compare(credentials.password, user.hashedPassword);

            if (!passwordsMatch) {
               throw new Error("Incorrect password");
            }

            return user;
         },
      }),
   ],
   pages: {
      signIn: "/login",
   },
   debug: process.env.NODE_ENV === "development",
   session: {
      strategy: "jwt",
   },
   jwt: {
      secret: process.env.NEXTAUTH_JWT_SECRET,
   },
   secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };