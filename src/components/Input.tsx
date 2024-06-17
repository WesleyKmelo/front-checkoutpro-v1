// definir os tipos que serão recebidos pela componente pois pois o componente usa TypeScript
// que força tipagem das variáveis

type Props = {
    lbl:string,
    placeHolder:string
};


export default function Input({lbl, placeHolder}:Props){  

    return(
        <div className="p-1">
            <label htmlFor={lbl}
                  className="block text-sm font-medium text-yellow-100"
                
                >{lbl}
            </label>

            <input 
                className="mt-1 p-2 border rounded focus:outline-none text-zinc-900 font-bold focus:ring-blue-500"
                id = {lbl}
                type="password"
                placeholder={placeHolder}
            />
        </div>
    )

}