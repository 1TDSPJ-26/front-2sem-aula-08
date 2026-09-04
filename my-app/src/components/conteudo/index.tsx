import { useState } from "react";


export default function Conteudo() {
    let nomeComum:string| null ="rick";
    function alterNomeComum(){
        nomeComum =prompt("Digite o new nome");
    }
    const[nomeState, setNomeState] = useState<String| null>("Chico Bento");
    function alteraNomeState(){
        
    }

    return (
        <main>
            <div>
                <p>Nome Comum:{nomeComum}</p>
                <button onClick={alterNomeComum}> Nome ALterado = (nomeComum)</button>
            </div>
            <h2>Conteudo Principal</h2>

            <figure>
                <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />

                <figcaption>Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
            </figure>
        </main>
    )
}