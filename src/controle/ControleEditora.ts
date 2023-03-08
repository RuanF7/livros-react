import React from 'react';
import { Editora } from '../modelo/Editora';

const editoras: Editora[] = 
[
  {  nome: 'Harry', codEditora: 1 },
  {  nome: 'Harry', codEditora: 2 },
  {  nome: 'Harry', codEditora: 3 }
];

export class ControleEditora {
  getNomeEditora(codEditora: number) {
    const retorno = editoras.filter((val) => {val.codEditora = codEditora})
    return retorno[0];
  }

  getEditoras() {
    return editoras;
  }
}