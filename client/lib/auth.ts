import CredentialsProvider from "next-auth/providers/credentials";
import { get, post } from "./request";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "text",
        },
      },
      async authorize(credentials) {
        const res = await post("/auth/signup", {
          email: credentials?.email,
          password: credentials?.password,
        });
        const user = await get(
          "/user",
          {},
          {
            authorization: res.token,
            id: res.userId,
          }
        );
        return {
          token: res.token,
          id: user.id,
          name: user.name,
          email: user.email,
          profilePicture: user.profilePicture,
        };
      },
    }),
  ],
  callbacks: {
    session({ session, token }: { session: any; token: any }) {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            authorization: token.token,
            id: token.id,
            name: token.name,
            email: token.email,
            profilePicture: token.profilePicture,
          },
        };
      }
      return token;
    },
    jwt: ({ token, user }: { token: any; user: any }) => {
      if (user) {
        const userData = user as any;
        return {
          ...token,
          token: userData.token,
          id: userData.id,
          name: userData.name,
          email: userData.email,
          profilePicture: userData.profilePicture,
        };
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
  },
  secret: process.env.SECRET,
  pages: {
    signIn: "/signup",
  },
};
