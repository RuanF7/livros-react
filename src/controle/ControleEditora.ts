import { Editora } from '../modelo/Editora';

export class ControleEditora {

  editoras: Editora[] = [
    { nome: 'Rocco', codEditora: 1 },
    { nome: 'HarperCollins', codEditora: 2 },
    { nome: 'Intrínseca', codEditora: 3 }
  ];


  getNomeEditora(codigoEditora: number) {
    return this.editoras.filter((editora) => { return editora.codEditora === codigoEditora })
  }

  getEditoras() {
    return this.editoras;
  }
}