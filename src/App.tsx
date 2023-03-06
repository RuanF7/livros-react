import React, { useState } from 'react';
import './App.css';

//Componente
import Header from './components/Header';
import TaskForm from './components/LivrosDados';
import TaskList from './components/LivrosListas';

//css
import styles from './App.module.css'

//Interface
import { ILivros } from './modelo/Livro';





function App() {
  
  const [taskList, setTaskList] = useState<ILivros[]>([]);

  const deleteTask = (codEditora: number) =>{
    setTaskList(
      taskList.filter((task)=>{
        return task.codEditora !== codEditora;
      })
    );
  };
const hideOrShowModal = (display: boolean) => {
  const modal = document.querySelector("#modal")
    if(display){
    modal!.classList.remove("hide");

  }else{
    modal!.classList.add("hide")
  }
};

  const editTask = ():void => {
    hideOrShowModal(true);
  }


  return (
    <div>
      <Header />
        <main  className={styles.main}>
        <div>
         <TaskForm btnText='Cadastre um novo Livro!' 
          taskList={taskList}
          setTaskList = {setTaskList}/>
        </div>
        <div>
          <TaskList taskList={taskList} handleDelete={deleteTask} 
          handleEdit={editTask}/>
        </div>
        </main>
    </div>
  );
}

export default App;