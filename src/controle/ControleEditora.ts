import { Editora } from '../modelo/Editora';

export class ControleEditora {

  editoras:Editora[] = [
      { nome: 'Harry', codEditora: 1 },
      { nome: 'Harry', codEditora: 2 },
      { nome: 'Harry', codEditora: 3 }
    ];


  getNomeEditora(codigo: number) {
     return this.editoras.filter((editora) => { return editora.codEditora === codigo })
    
  }

  getEditoras() {
    return this.editoras;
  }
}