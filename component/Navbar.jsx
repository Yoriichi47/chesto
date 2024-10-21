import React from 'react'
import Link from 'next/link'
import SignIn from '@/app/SignIn/page'
import userAvatar from './userAvatar'
import {auth} from "@/app/auth"
// import SignIn from './sign-in'

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
      <button className='border-2 p-4 bg-white text-black'><Link href="../SignIn">Sign In</Link></button> 
      {/* <userAvatar /> */}
    <p className='text-5xl text-center'>Signed in as {userName()}</p>
    </div>
  </>
}

export default Navbar