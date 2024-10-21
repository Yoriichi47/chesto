import React from 'react'
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
    <p className='text-5xl text-center'>Signed in as {userName()}</p>
    </div>
  </>
}

export default Navbar