import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { Editora } from './modelo/Editora'

interface PropertyDadosLivro {
  editora: Editora;
};

const LinhaDados = ({ editora }: PropertyDadosLivro) => {
  const formDados = new ControleLivro();

  return (
    <>
    </>
  );
};

export default function LivroDados() {
  const dadosArmazenados = new ControleEditora();
  return (
    <main className="container">
      <h1>Dados do livro</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Titulo</label>
          <input className="form-control mb-2"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Resumo</label>
          <textarea className="form-control mb-2" id="exampleFormControlTextarea1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Editora</label>
          <select className="form-control mb-4">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Autores (1 por linha)</label>
          <textarea className="form-control mb-4"  id="exampleFormControlTextarea1"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-2">Salvar Dados</button>
        </div>
      </form>
    </main>
  );
};


