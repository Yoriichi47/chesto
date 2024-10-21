import { signIn } from "@/app/auth";

export function SignIn(){
    return(
        <form 
        action={async () => {
            "use server"
            await signIn("google", {redirectTo: "/"})
        }}>
            <button>Sign In</button>
        </form>
    )
}