import { useState } from "react";

export default function Lampada(){
    let lampadaComumAcesa = false;
    const [lampadaStateAcesa, setLampadaStateAcesa] = useState(false);
    let imagemLampadaComum: string = '/lampada-apagada.png'


    function alternarVariavelComum() {
        lampadaComumAcesa = !lampadaComumAcesa
        if (lampadaComumAcesa === true){
            imagemLampadaComum = '/lampada-acesa.png'
        }
        else{
            imagemLampadaComum = '/lampada-apagada.png'
        }
        console.log('Variável comum:', lampadaComumAcesa)
    }

    function alternarUsoState(){
        setLampadaStateAcesa(!lampadaStateAcesa)
    }

    return(
        <main>
            <section>
                <h2>Lâmpada Comum</h2>
                
                <figure>
        <img src= {imagemLampadaComum}
          alt="Lâmpada" />
          <figcaption>
          Imagem da lâmpada comum
        </figcaption>
      </figure>
      <button onClick={alternarVariavelComum}>Lâmpada comum acesa = {String(lampadaComumAcesa)}</button>
            </section>

            <section>
                <h2>Lâmpada UseState</h2>

                <figure>
                    <img src={
                            lampadaStateAcesa
                                ? '/lampada-acesa.png'
                                : '/lampada-apagada.png'
                        } alt="Lâmpada" />
                    <figcaption>
                        Imagem da lâmpada State
                    </figcaption>
                </figure>
                <button onClick={alternarUsoState}>Lâmpada State acesa = {String(lampadaStateAcesa)}</button>
            </section>
        </main>
    )
}