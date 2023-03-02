import './App.css';
import Data from './components/Header';


const handleDelete =(index: number) => {
  const lista = [...livros]
  lista.splice(index,1)
  setLista(lista)
}

function App() {  

  return (
    <div>
      <Data/>
    </div>
  );
}

export default App;
