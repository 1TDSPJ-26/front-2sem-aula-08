import { Link } from 'react-router'

export default function Error() {
  return (
    <main>
      <h2>Página não encontrada</h2>
      <p>O endereço acessado não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  )
}
