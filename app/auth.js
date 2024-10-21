import NextAuth from "next-auth";
import client from "./lib/mongoClient";
import User from "./models/userModel"
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Google,
    // Credentials({
    //   Credentials: {
    //     Email: {},
    //     Password: {},
    //   },
    //   async authorize(credentials) {
    //     try {
    //         const {email, password} = credentials
            
    //         const user = await User.findOne({email})

    //     if(!user){
    //         console.log("User not Found")
    //     }
        
    //     const isValid = await user.matchPassword(password)
        
    //     if(!isValid){
    //         console.log("Invalid Password")
    //     }
        
    //     console.log("User: ", user)
    //     return user
    // } catch (error) {
    //     return error.message
    // }
    //   },
    // }),
  ],
});
