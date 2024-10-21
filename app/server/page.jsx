import {auth} from "@/app/auth"
import { stringify } from "postcss"

export default async function Page(){
    const session = await auth()

    if(!session.user){
        return(
            <div>
                <p>Not signed in</p>
            </div>
        )
    }

    return(
        <div>
           <pre>{JSON>stringify(session, null, 2)}</pre> // This is the only change in this file from the original code
        </div>
    )
}