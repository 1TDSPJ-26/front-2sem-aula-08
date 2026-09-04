import { useState } from "react";

export default function Lampada(){
    let lampadaComumAcesa = false;
    const [lampadaStateAcesa, setLampadaStateAcesa] = useState(false);

    function alternarVariavelComum() {
        lampadaComumAcesa = !lampadaComumAcesa
        console.log('Variável comum:', lampadaComumAcesa)
    }

    function alternarUsoState(){
        
    }

    return(
        <main>
            <section>
                <h2>Lâmpada Comum</h2>
            </section>
            <section>
                <h2>Lâmpada UseState</h2>
            </section>
        </main>
    )
}