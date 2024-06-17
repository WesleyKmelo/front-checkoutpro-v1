import Botao from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center  justify-around p-24">
      <div className="">
        <Logo/>
      </div>
      
      < div className="">
          < Input lbl = "Usuário" placeHolder = "Digite seu nome"/>
          < Input lbl = "Senha" placeHolder = "Digite sua senha"/>
          <Botao>Login</Botao>
      </div>
      
    </main>
  );
}
