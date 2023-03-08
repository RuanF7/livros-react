import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LivroDados from './LivroDados';
import LivroLista from './LivroLista'

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className='navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='dados'>Catalogo</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='root'>Novo</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='root' element={<LivroLista />} />
        <Route path='dados' element={<LivroDados />} />
      </Routes>
    </BrowserRouter>

  );

};

export default App;