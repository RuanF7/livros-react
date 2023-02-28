import * as React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import data from '../dados.json';

const Data = () => {    
  
  const [livros, setLivros] = useState(data);
  
  return (

    <Table striped bordered hover variant="dark">
      <thead >
        <tr>
          <th>Titulo</th>
          <th>Resumo</th>
          <th>Editora</th>
          <th>Autores</th>
        </tr>
      </thead>
      <tbody>
        {livros.map((livros) => (
          <tr>
            <td>{livros.titulo}</td>
            <td>{livros.resumo}</td>
            <td>{livros.editora}</td>
            <td>{livros.autores}</td>
          </tr>
        ))}
      </tbody>        
    </Table>
  );
}  
 
export default Data;