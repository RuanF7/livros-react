import { Livros } from '../modelo/Livro';

const livros: Livros[] =
  [
    {
      codEditora: 1,
      codigo: 1,
      titulo: 'Harry',
      resumo: 'Harry',
      autores: ['Harry', 'John']
    },
    {
      codEditora: 2,
      codigo: 2,
      titulo: 'Harry',
      resumo: 'Harry',
      autores: ['Harry', 'John']
    },
    {
      codEditora: 3,
      codigo: 3,
      titulo: 'Harry',
      resumo: 'Harry',
      autores: ['Harry', 'John']
    }
  ];

export class ControleLivros {
  obterLivros(codEditora: number) {
    return livros;
  }

  incluir(livro: livro) {
    const codigoMaisAlto = livros.reduce((codigoAtual, livroAtual) => {
      return codigoAtual > livroAtual.codigo ? codigoAtual : livroAtual.codigo;
    }, 0);

    livro.codigo = codigoMaisAlto + 1;
    livro.push(livros);
  }

  getLivros() {
    return livros;
  }
}