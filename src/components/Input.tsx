// definir os tipos que serão recebidos pela componente pois pois o componente usa TypeScript
// que força tipagem das variáveis

import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type Props = {
    lbl:string,
    name:string,
    typeInpt:InputHTMLAttributes<HTMLInputTypeAttribute>,
    placeHolder:string
};


export default function Input({lbl,name, typeInpt, placeHolder}:Props){  

    return(
        <div className="p-1">
            <label htmlFor={lbl}
                  className="block text-sm font-medium text-yellow-100"
                
                >{lbl}
            </label>

            <input 
                className="mt-1 p-2 border rounded focus:outline-none text-zinc-900 font-bold focus:ring-blue-500"
                id = {lbl}
                name = {name}
                type = {typeInpt.type}
                placeholder={placeHolder}
            />
        </div>
    )

}