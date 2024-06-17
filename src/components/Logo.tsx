import Image from "next/image";

export default function Logo(){
    return (       
            <Image 
                src="/assets/logo5.png"
                alt = "Logo do Sistema"
                width={250}
                height={250}
            />
    )
}