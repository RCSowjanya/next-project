import NextAuth from "next-auth";
import credentialProvider from "next-auth/providers/credentials";
import UserModel from "./utils/models/User";
export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    credentialProvider({
      name: "credentials",
      async authorize(credentials) {
        //compare with credentials of login form with user model
        const user = await UserModel.findOne({ email: credentials?.email });
        if (!user) {
          return null;
        }
        if (credentials?.password !== user.password) {
          return null;
        }
        return { name: user.username, email: user.email, role: user.role };
      },
    }),
  ],
  secret: process.env.SECRET_KEY,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.username = user.name;
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.userId = token.userId;
      session.username = token.username;
      session.role = token.role;
      session.email = token.email;
      return session;
    },
  },
});
