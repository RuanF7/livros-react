import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

import { Livro } from "./modelo/Livro";

interface PropertyLinhaLivro {
  livro: Livro;
};

const LinhaLivro = ({ livro }: PropertyLinhaLivro) => {
  const editora = new ControleEditora();

  return (
    <>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button type="button" className="btn btn-danger btn-sm">
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default function LivroLista() {
  const livrosArmazenados = new ControleLivro();
  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th> Título</th>
            <th> Resumo</th>
            <th> Editora</th>
            <th> Autores</th>
          </tr>
        </thead>
        <tbody>
          {livrosArmazenados.obterLivros().map((livro) => {
            return <LinhaLivro key={livro.codigo} livro={livro} />;
          })}
        </tbody>
      </table>
    </main>
  );
}