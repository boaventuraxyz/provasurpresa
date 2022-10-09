import { useState } from "react"
import Sorvete from "../../api/Sorvete"

export default function App(){
    const[gramas, setGramas] = useState()
    const[resposta, setResposta] = useState()

    return(
        <main>
            <input value={gramas} type="number" placeholder="gramas" onChange={(e) => setGramas(e.target.value)}/>
            <button onClick={() => setResposta(Sorvete(gramas))}>Calcular</button>
            {resposta}
        </main>
    )
}