import NextAuth from "next-auth";
import client from "./lib/mongoClient";
import User from "./models/userModel"
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [Google ],
  page: {
    signIn: "/SignIn"
  }
});
