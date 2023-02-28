import  { useState } from 'react';
import { Editora } from './modelo/Editora'
import Header from './components/Header';
import './App.css';

function App() {
  const [editora, setEditora] = useState<Editora[]>([{
    nome: 'Harry Potter',
    codEditora: 1,
  }]);

  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
