import Login from "@/components/Login/LogIn";
import Logo from "@/components/Logo";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center  justify-around p-24">

        <Logo/>      
        <Login/>
              
    </main>
  );
}
