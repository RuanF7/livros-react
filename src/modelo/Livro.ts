
export class Livro {

  codEditora: number;
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    autores: string[],
    resumo: string

  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.autores = autores;
    this.resumo = resumo;
  }
}
