
import { useState } from "react"
import Acai from "../../api/Acai"

export default function App(){
    const [pequeno, setPequeno] = useState()
    const [medio, setMedio] = useState()
    const [grande, setGrande] = useState()
    const [desconto, setDesconto] = useState()
    const [total, setTotal] = useState()
    
   
   

    return (
        <main>
            <div>
                <div>
                    <div>
                        <label>Pequenos</label>
                        <input type="number" placeholder="Açais pequenos" value={pequeno} onChange={(e) => setPequeno(e.target.value)} />
                    </div>
                    <div>
                        <label>Médios</label>
                        <input type="number" placeholder="Açais médios" value={medio} onChange={(e) => setMedio(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Grandes</label>
                        <input type="number" placeholder="Açais grandes"  value={grande} onChange={(e) => setGrande(e.target.value)} />
                    </div>
                    <div>
                        <label>Desconto</label>
                        <input type="number" placeholder="Porcentagem do desconto"  value={desconto} onChange={(e) => setDesconto(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() =>  setTotal(Acai(pequeno, medio, grande, desconto))}>Calcular</button>
                <p>Total: {total}</p>
            </div>
        </main>
    )
}