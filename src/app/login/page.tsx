import Logout from "@/components/Login/LogOut";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Login(){
    const session = await getServerSession()
    
    if(!session){
        redirect("/");
    }
    
    return (
        <>
        <h1>Logado</h1>
        <Logout/>
        </>
    )
}