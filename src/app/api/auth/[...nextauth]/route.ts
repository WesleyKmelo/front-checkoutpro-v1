import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    pages:{
        signIn:"/"
    },   
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            nome: { label: "Usuário", type: "text", placeholder: "nome" },
            password: { label: "Senha", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials){
                return null;
            }
            
            if(credentials.nome === "admin" && credentials.password === "123"){
                return{
                    id:"1",
                    name: credentials.nome                  
                }
            }
           return null;
          },
        }),
      ],
})

export { handler as GET, handler as POST }