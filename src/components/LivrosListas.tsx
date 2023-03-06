import React from 'react'
import { ILivros } from '../modelo/Livro'
//css
import  styles  from './LivrosListas.module.css';




interface Props  {
  taskList: ILivros[]
  handleDelete(codEditora:number): void
  handleEdit(): void;
}

const TaskList = ({taskList, handleDelete, }: Props) => {
  return (
    <>
       {taskList.length > 0?(
       taskList.map((task) =>(
        <div key = {task.codEditora} className={styles.task}>
          <div className={styles.details}>
            <p><b>Titulo: </b> {task.titulo}</p>
            <p><b>Resumo: </b> {task.resumo}</p>
            <p><b>Editora: </b>{task.editora}</p>
            <p><b>Autores: </b>{task.autores}</p>
          </div>
          <div className={styles.actions}>
            
            <i 
             className='bi bi-trash'  
             onClick={() => {
              handleDelete(task.codEditora); 
             }}  
            ></i>
          </div>
        </div>

       ))
       ) : (
        <h4>Não há Livros.</h4>
       )}
    </>
  )
}

export default TaskList