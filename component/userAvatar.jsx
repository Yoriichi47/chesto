import React from 'react'
import {auth} from "@/app/auth"

const userAvatar = async () => {
    const session = await auth()

    if(!session.user){
        return null
    }
    return(
        <div>
            <img src="{session.user.image" alt="User Avatar" />
        </div>
    )
}

export default userAvatar