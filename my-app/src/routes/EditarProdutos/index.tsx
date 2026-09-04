import { useState } from "react";

export default function EditarProdutos() {
  let nomeComum: string | null = "flavio";
  function alterNomeComum() {
    nomeComum = prompt("digite o novo nome!");
    console.log("nome alterado : ", nomeComum)
  }

  const [nomeState, setNomeState] = useState<string | null>("juquinha");
  function alterNomeState() {
    const nome: string | null = prompt("digite o novo nome")
    setNomeState( (valorAnterior)=> valorAnterior = nome);
    console.log("Nome alterado : ", nomeState);
  }






  return (
    <header>
        <h2>EditarProdutos</h2>

      <div>
        <p>Nome Comum : {nomeComum}</p>
        <button onClick={alterNomeComum}>Nome Alterado = {nomeComum}</button>
      </div>

      <div>
        <p>Nome State : {nomeState}</p>
        <button onClick={alterNomeState}>Nome alterado State = {nomeState}</button>
      </div>
    </header>
  )
}