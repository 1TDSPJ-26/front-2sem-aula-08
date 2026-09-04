import { use, useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {

  let nomeComum: string | null = "Tay";
  function alterarNomeComum() {
    nomeComum = prompt("Digite o novo nome!")
    console.log("Nome alterado: ", nomeComum)
  }

  const [nomeState, setNomeState] = useState<String | null>("Schneider");
  function alteraNomeState() {
    const nome: string | null = prompt("Digite o novo nome!")
    setNomeState((valorAnterior) => valorAnterior = nome)
    console.log("Nome alterado : ", nomeState)
  }

  //lampada state
  const [lampadaState, setLampadaState] = useState<String | null>("Lâmpada apagada")
  function ligarLampadaState() {
    setLampadaState("Lâmpada acesa");
  }

  //lampada comum
  let lampadaComum: string | null = "Lâmpada apagada"
  function ligarLampadaComum() {
    lampadaComum = "Lâmpada acesa"
    console.log(lampadaComum)
  }

  return (
    <main>

      <div>
        <h1>Lâmpada</h1>
        <p>Lâmpada Comum</p>
        <button onClick={ligarLampadaComum}>Ligar Lâmpada = {lampadaComum}</button>

        <p>Lâmpada state</p>
        <button onClick={ligarLampadaState}>Ligar Lâmpada = {lampadaState}</button>
      </div>
      <div>
        <p>Nome Comum : {nomeComum}</p>
        <button onClick={alterarNomeComum}>Alterar nome = {nomeComum}</button>

      </div>
      <div>
        <p>Nome State : {nomeState}</p>
        <button onClick={alteraNomeState}>Alterar nome state = {nomeState}</button>
      </div>
      <section>
        <h2>Conteúdo</h2>
        <figure>
          <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />
          <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
        </figure>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
      </section>
      <section>
        <h2>Imagem Interna</h2>
        <figure>
          <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" />
          <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
        </figure>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
      </section>
      <section>
        <h2>Imagem Estática</h2>
        <figure>
          <img src="/quadrado-b.png" alt="Imagem ilustrativa do conteúdo" />
          <figcaption> Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
        </figure>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur vero quod consectetur saepe veritatis explicabo obcaecati iure eveniet est?</p>
      </section>
    </main>
  )
}