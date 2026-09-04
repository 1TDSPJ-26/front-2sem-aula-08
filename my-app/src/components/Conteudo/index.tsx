import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
  let nomeComum: string| null = "Weather Forecast";
  function alteraNomeComum(){
    nomeComum = prompt("Digite um novo nome: ");
    console.log("Nome alterado: ", nomeComum);
    
  };
  
  const[nomeState, setNomeState] = useState<string | null>("Jotaro");
  function alteraNomeState(){
    const nome: string | null = prompt("Digite um novo nome: ");
    setNomeState((valorAnterior) => valorAnterior = nome);
    console.log("Nome alterado: ", nomeState);
  };

  return (
    <main>
      <div>
        <p>Nome comum: {nomeComum}</p>
        <button onClick={alteraNomeComum}>Nome alterado = {nomeComum}</button>
      </div>
      <div>
        <p>Nome state: {nomeState}</p>
        <button onClick={alteraNomeState}>Nome state alterado = {nomeState}</button>
      </div>
    <section>
      <h2>Conteúdo principal</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga impedit adipisci cupiditate soluta voluptatum perspiciatis! Molestiae eos excepturi corporis, laborum eum consectetur quis rem amet fuga laudantium facere ducimus.</p>
      <figure>
        <img src="/quadrado-b.png"
          alt="Imagem ilustrativa do conteúdo" />

          <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>

      </figure>
      </section>
      <section>
      <h2>Imagem interna</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga impedit adipisci cupiditate soluta voluptatum perspiciatis! Molestiae eos excepturi corporis, laborum eum consectetur quis rem amet fuga laudantium facere ducimus.</p>
      <figure>
        <img src={imgQuadrado}
          alt="Imagem ilustrativa do conteúdo" />

          <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>

      </figure>
      </section>
      
    </main>
  )
}