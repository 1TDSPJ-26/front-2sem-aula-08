

export default function Conteudo() {

  let nomeComum:string | null = "flavio";
  function alterNomeComum() {
    nomeComum = prompt("digite o novo nome!");
  }

  return (
    <main>
        <h2>Conteudo Principal</h2>

        <figure>
            <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />

            <figcaption>Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
        </figure>
    </main>
  )
}