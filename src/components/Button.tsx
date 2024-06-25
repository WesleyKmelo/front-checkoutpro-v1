"use client"

import { ButtonHTMLAttributes } from "react";

// definir os tipos que serão recebidos pela componente pois o componente usa TypeScript
// que força tipagem das variáveis

type Props = {
    onCLICK?: ButtonHTMLAttributes<HTMLButtonElement>,
    onSUBMIT?: ButtonHTMLAttributes<HTMLButtonElement>,
    typeBtn?: ButtonHTMLAttributes<HTMLButtonElement>
    children: React.ReactNode
};

export default function Botao({children, onCLICK, onSUBMIT, typeBtn}:Props){
    return(
        <div className="bg-slate-600
                        flex items-center 
                        justify-center 
                        p-3 m-2 rounded-md
                        hover:to-blue-700
                        cursor-pointer ">
            <button onClick={onCLICK?.onClick || onSUBMIT?.onSubmit}
                    type={typeBtn?.type}
           >
                {children}
            </button>
        </div>
    )
}