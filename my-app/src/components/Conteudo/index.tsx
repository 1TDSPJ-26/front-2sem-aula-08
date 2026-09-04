import { useState } from "react";

export default function Conteudo(){

    let nomeComum:string| null = "Alê";
    function alterarNomeComum(){
        nomeComum = prompt("Digite o novo nome");
        console.log("Nome alterado : ", nomeComum);
    }

    const [nomeState, setNomeState] = useState<string | null>("Juquinha");
    
    function alteraNomeState(){
        const nome: string | null = prompt("Digite o novo nome");
        setNomeState((valorAnterior) => valorAnterior = nome);
        console.log("Nome alterado : ", nomeState);
    }

    return (
        <main>
            <div>
                <p>Nome Comum: {nomeComum}</p>
                <button onClick={alterarNomeComum}>Nome Alterado = {nomeComum}</button>
            </div>
            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraNomeState}>Nome Alterado = {nomeState}</button>
            </div>
            <section>
                <h2>Conteúdo</h2>
                <figure>
                    <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="Imagem ilustrativa" />
                    <figcaption>Imagem ilustrativa</figcaption>
                </figure>
            </section>
        </main>
    );
}