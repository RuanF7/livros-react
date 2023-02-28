import  { useState } from 'react';
import { Editora } from './modelo/Editora'
import './App.css';
import Data from './components/Header';

function App() {
  const [editora, setEditora] = useState<Editora[]>([{
    nome: 'Harry Potter',
    codEditora: 1,
  }]);

  return (
    <div>
      <Data/>
    </div>
  );
}

export default App;
