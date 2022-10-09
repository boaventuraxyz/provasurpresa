
import { useState } from "react"
import Signo from "../../api/Signo"

export default function App(){
    const[dia, setDia] = useState()
    const[mes, setMes] = useState()
    const[resposta, setResposta] = useState()

    return(
        <main>
            <h1>descubra se voce é de libra ou nao</h1>
            <input value={dia} type="number" placeholder="dia" onChange={(e) => setDia(e.target.value)} />
            <input value={mes} type="text" placeholder="mes" onChange={(e) => setMes(e.target.value)}/>
            <button onClick={() => setResposta(Signo(mes, dia))}>Descobrir</button>
            {resposta}
        </main>
    )
}