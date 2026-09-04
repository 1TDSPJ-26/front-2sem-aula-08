import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
  const [nomeComun, setNomeComun] = useState<string | null>("Renato");

  function alteraNomeComum() {
    const nome = prompt("Digite o novo nome");
    setNomeComun(nome);
    console.log("Nome Alterado :", nome);
  }

  const [nomeState, setNomeState] = useState<string | null>("Juquinha");

  function alterarNomeState() {
    const nome: string | null = prompt("Digite o novo nome!");
    setNomeState(nome);
    console.log("Nome Alterado : ", nome);
  }
      
  return (
    <main>
      <div>
        <p>Nome Comun: {nomeComun}</p>

        <button onClick={alteraNomeComum}>
          Nome Alterado = {nomeComun}
        </button>
      </div>

      <div>
        <p>Nome State: {nomeState}</p>

        <button onClick={alterarNomeState}>
          Nome Alterado = {nomeState}
        </button>
      </div>

      <section>
        <h2>Conteúdo</h2>

        <figure>
          <img
            src="https://placehold.co/300x200/FF0000/FFFFFF/png"
            alt="Imagem ilustrativa do conteúdo"
          />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur
          vero quod consectetur saepe veritatis explicabo obcaecati iure
          eveniet est?
        </p>
      </section>

      <section>
        <h2>Imagem Interna</h2>

        <figure>
          <img src={imgQuadrado} alt="Imagem quadrada" />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          minima, numquam qui sequi ut alias, ad optio corrupti cum, pariatur
          vero quod consectetur saepe veritatis explicabo obcaecati iure
          eveniet est?
        </p>
      </section>
    </main>
  );
}