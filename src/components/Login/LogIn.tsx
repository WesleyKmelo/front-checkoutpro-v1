"use client"

import { signIn } from "next-auth/react";
import Botao from "../Button"
import Input from "../Input"

export default function LoginForm(){

    async function login(event: React.FormEvent<HTMLFormElement>){
       event.preventDefault();

       const data = new FormData(event.currentTarget);

       const dataLogin = {
        nome: data.get("usuario"),
        password: data.get("pass")
       }

       signIn("credentials",{
        ...dataLogin,
        callbackUrl:"/login"
       })
    }

    return(
        < form onSubmit={login} className="">
            < Input 
                lbl = "Usuário" 
                placeHolder = "Digite seu nome"
                name="usuario"
                typeInpt={{type:"text"}}
            />
            < Input 
                lbl = "Senha" 
                placeHolder = "Digite sua senha"
                name="pass"
                typeInpt={{type:"password"}}
            />

            <Botao typeBtn={{type:"submit"}}  >Login</Botao>
        </form>
    )
}