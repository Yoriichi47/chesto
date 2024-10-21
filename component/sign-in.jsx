import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <>
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
      >
      <button type="submit">Google</button>
    </form>
    <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Password
          <input name="password" type="password" required />
        </label>
        <button type="submit">Sign In</button>
      </form>
      </>
  )
} 