import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { Livro } from "./modelo/Livro";
import { useEffect, useState } from "react";

type PropertyLinhaLivro = {
  livro: Livro;
  prateleira: ControleLivro;
};

type Property = {
  livros: ControleLivro;
};


const LinhaLivro = ({ livro, prateleira }: PropertyLinhaLivro) => {
  const editora = new ControleEditora();

  return (
    <>
      <tr>
        <th>
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => 
              prateleira.excluir(livro.codigo)}
          >
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

export default function LivroLista({ livros }: Property) {
  const [livrosArmazenados, setLivrosArmazenados] = useState<Livro[]>(livros.obterLivros());

  useEffect(() => {
    setLivrosArmazenados(livros.obterLivros());
  },[livros]);
  
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
          {livrosArmazenados.map((livro) => {
            return (<LinhaLivro key={livro.codigo} livro={livro} prateleira={livros}/>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}