import { Livros } from '../modelo/Livro';

export class ControleLivros {

  livros: Livros[] = [
    {
      codEditora: 1,
      codigo: 1,
      titulo: 'Harry Potter e a pedra filosofal',
      resumo: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.',
      autores: ['J.K.', 'Rowling']
    },
    {
      codEditora: 2,
      codigo: 2,
      titulo: 'O senhor dos aneis: A sociedade do anel',
      resumo: 'A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo.',
      autores: ['J.R.R', 'Tolkien']
    },
    {
      codEditora: 3,
      codigo: 3,
      titulo: 'Percy Jackson e o ladrão de raios',
      resumo: 'Percy Jackson é filho de um deus. Ele está para ser expulso do colégio... de novo. Mas, aos doze anos, esse é apenas mais um de seus problemas. Além do transtorno do déficit de atenção e da dislexia, parece que, ultimamente, criaturas fantásticas e deuses do Olimpo saíram dos livros de mitologia grega diretamente para a realidade. E, ao que tudo indica, estão aborrecidos com ele. O raio-mestre de Zeus foi roubado, e é Percy quem deve resgatá-lo. Para restaurar a paz no Olimpo, ele e seus amigos – jovens heróis modernos – precisarão fazer mais que capturar o verdadeiro ladrão: Percy terá de encarar o pai que o abandonou, resolver o enigma do Oráculo e desvendar uma traição mais ameaçadora que a fúria dos deuses.',
      autores: ['Rick', 'Riordan']
    }
  ];
};

obterLivros() {
  return this.livros;
}

incluir(livroRecebido: Livro) {
  const codigoMaisAlto = this.livros.reduce((codAtual, livroAtual) => {
    return codAtual > livroAtual.codigo ? codAtual : livroAtual.codigo;
  }, 0);

  livroRecebido.codigo = codigoMaisAlto + 1;
  this.livros.push(livroRecebido);
}

excluir() {

}
