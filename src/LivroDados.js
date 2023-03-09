import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { Editora } from './modelo/Editora'
import { useEffect, useState } from "react";


const getDatafromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}


export const LivroDados = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [editora, setEditora] = useState('');
  const [autores, setAutores] = useState('');


  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      titulo,
      resumo,
      editora,
      autores
    }
    setbooks([...books, book]);
    setTitulo('');
    setResumo('');
    setEditora('');
    setAutores('');
  }

  // delete book from LS
  const deleteBook = (editora) => {
    const filteredBooks = books.filter((element, index) => {
      return element.editora !== editora
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])


  return (
    <main className="container">
      <h1>Dados do livro</h1>
      <form 
      onSubmit={handleAddBookSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Titulo</label>
          <input className="form-control mb-2" required
            onChange={(e)=>setTitulo(e.target.value)} value={titulo}></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Resumo</label>
          <textarea className="form-control mb-2" required
            onChange={(e)=>setResumo(e.target.value)} value={resumo}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Editora</label>
          <select className="form-control mb-4" required
            onChange={(e)=>setEditora(e.target.value)} value={editora}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Autores (1 por linha)</label>
          <textarea className="form-control mb-4" required
            onChange={(e)=>setAutores(e.target.value)} value={autores}></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-2">Salvar Dados</button>
        </div>
      </form>
    </main>
  );
};


