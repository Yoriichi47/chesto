import React from 'react'
import userAvatar from './userAvatar'
import { SignOut } from "./auth/signout-button"
import {auth} from "@/app/auth"

const userName = async () => {
    const session = await auth()
    if (session && session.user) {
      return session.user.name;
    } else {
      return "Guest"
    }
}

const Navbar = () => {

  return <>
    <div>
      <p>Navbar</p>
      {/* <userAvatar /> */}
    <p className='text-5xl text-center'>Signed in as {userName()}</p>
    </div>
  </>
}

export default Navbar