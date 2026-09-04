import { useState } from "react";

export default function Conteudo() {
  
 let nomeComum:string| null = "Alê";
 function alterNomeComum(){
  nomeComum = prompt("Díite o novo nome!");
  console.log("Nome alterado : ", nomeComum);
 }

  const[nomeState, setNomeState] = useState<string | null>("juquinha");
  function alteraNomeState(){
    const nome:string | null =prompt("Dígite o novo nome!");
    setNomeState((valorAnterior)=> valorAnterior = nome);
    console.log("Nome alterado : ", nomeState);
  }

  return (
    <main>
      <div>
        <p>Nome Comum : {nomeComum}</p>
        <button onClick={alterNomeComum}>Nome ALterado = {nomeComum}</button>
      </div>
      <div>
        <p>Nome State : {nomeState}</p>
        <button onClick={alteraNomeState}>Nome ALterado = {nomeState}</button>

      </div>
      <h2>Conteúdo principal</h2>

      <figure>
        <img
          src="https://placehold.co/600x400/FFFFF0/FFFFFF/png"
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
      </figure>
    </main>
  )
}