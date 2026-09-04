import { useState } from 'react'

export default function Lampada() {
  let lampadaComumAcesa = false

  function alternarLampadaComum() {
    lampadaComumAcesa = !lampadaComumAcesa
    console.log('Lâmpada (variável comum):', lampadaComumAcesa)
  }

  const [lampadaStateAcesa, setLampadaStateAcesa] = useState(false)

  function alternarLampadaState() {
    setLampadaStateAcesa(!lampadaStateAcesa)
  }

  return (
    <main>
      <h2>Lâmpada</h2>

      <section>
        <h3>Lâmpada controlada por variável comum</h3>
        <button onClick={alternarLampadaComum}>Ligar/Desligar</button>
      </section>

      <section>
        <h3>Lâmpada controlada por useState</h3>
        <img
          src={
            lampadaStateAcesa
              ? 'https://placehold.co/300x300/FFEB3B/000000/png?text=Lampada+Ligada'
              : 'https://placehold.co/300x300/424242/FFFFFF/png?text=Lampada+Desligada'
          }
          alt={lampadaStateAcesa ? 'Lâmpada acesa' : 'Lâmpada apagada'}
        />
        <button onClick={alternarLampadaState}>Ligar/Desligar</button>
      </section>
    </main>
  )
}
