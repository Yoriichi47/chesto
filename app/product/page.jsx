import { redirect } from "next/navigation";
import { auth } from "../auth";
import ProductPage from "./ProductPage";

export default async function Page() {
    const session = await auth()
    const user = session?.user

    if(!user){
        redirect("/api/auth/signin?callbackUrl=/product")
    }

    return <ProductPage />
}