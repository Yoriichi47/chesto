// import { NextResponse } from "next/server"
// export {auth as middleware} from "@/app/auth"

// export function middleware(request){
//     const user = getUserFromRequest(request)

//     if(user?.role === "admin"){
//         return NextResponse.next()
//     }

//     return new NextResponse(null, {status: 403})
// }

// export const config = {
//     matcher: /^\/admin/
// }

// function getUserFromRequest(request){
//     const token = request.cookies.get("token")?.value
//     return decodeAndVerifyToken(token)
// }

// function decodeAndVerifyToken(token){
//     return null
// }

export const isAdmin = (req, res, next) => {
    if(req.user.role === "admin"){
        return next()
    }
    res.status(403).end() 
}