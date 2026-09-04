import { useState } from "react";

export default function Conteudo() {
  
  let nomeComum:string| null = "Breno";
    function alterNomeComum(){
      nomeComum = prompt ("Digite o novo nome!");
      console.log(prompt ("Digite o novo nome!"));
    
    }

  useState
  const[NomeState, setNomeState] = useState<String | null>("Breno");

  function alteraNomeState(){
    const nome: String | null = prompt("Digite o novo nome!");
    setNomeState( (valorAnterior)=> valorAnterior = nome);
    console.log("Nome alterado: ", NomeState);
  }

  return (
    <main>
      <div><p>Nome comum: {nomeComum}</p>
      <button onClick={alterNomeComum}>Nome alterado = {nomeComum}</button>
      <h2>Conteúdo principal</h2>
      </div>
      <div>
        <p>Nome State: {NomeState}</p>
        <button onClick={alteraNomeState}>Nome alterado = {NomeState}</button>
      </div>
      <figure>
        <img
          src="https://placehold.co/600x400/FFFFF0/FFFFFF/png"
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação de breno elisio leal legal
        </figcaption>
      </figure>
    </main>
  )
}