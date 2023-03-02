import * as React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/Button';
import data from '../dados.json';


interface Props {
  index: number;
  handleDelete: (id: number) => void;
}

const Data:React.FC<Props> = ({handleDelete, index}) => {

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
            <td>
              {livros.titulo}

              <br />
              <Button 
              variant="danger"
              onClick={() => handleDelete(livros.id)}              
              >
                Excluir
              </Button>

            </td>
            <td>{livros.resumo}</td>
            <td>{livros.editora}</td>
            <td><li><ul>{livros.autores}</ul></li></td>
          </tr>

        ))}
      </tbody>
    </Table>
  );
}

export default Data;

