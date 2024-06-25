"use client"

import { signOut } from "next-auth/react"
import Botao from "../Button"

function logout(){
    signOut();
}

export default function Logout(){
    return(
        <Botao onCLICK={{onClick:logout}}>Saida do Boteco</Botao>
    )
}