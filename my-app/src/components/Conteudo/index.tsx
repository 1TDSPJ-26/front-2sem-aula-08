import { useState } from "react";

export default function Conteudo() {
    let nomeComum:string| null = "Matheus";

    function alterNomeComum(){
        nomeComum = prompt("Digite o novo nome");
        console.log("Nome alterado: ", nomeComum)
    }

    const[nomeState, setNomeState] = useState<string| null>("Carlos");

    function alteraNomeState(){
        const nome: string | null = prompt("Digite o novo nome");
        setNomeState( (valorAnterior)=> valorAnterior = nome )
        console.log("Nome alterado: ", nomeState)
    }

    return (
        <main>
            <div>
                <p>Nome Comum: {nomeComum}</p>
                <button onClick={alterNomeComum}>Nome alterado = {nomeComum}</button>
            </div>
            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraNomeState}>Nome alterado = {nomeState}</button>
            </div>
            <section>
                <h2>Conteúdo principal</h2>
                <figure>
                    <img src="https://placehold.co/600x400/888888/FFFFFF/png" alt="Imagem ilustrativa do conteúdo"/>
                    <figcaption>Imagem ilustrativa do conteúdo</figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum voluptate est error optio porro, repellat labore reprehenderit vitae vero voluptas delectus deserunt nisi ipsam expedita hic laborum eaque alias minima sunt aspernatur officiis nemo in. Corporis corrupti porro veniam?</p>
            </section>
        </main>
    )
}