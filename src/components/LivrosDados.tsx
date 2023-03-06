import React, {useState, ChangeEvent, FormEvent} from 'react'



//css
import styles from './LivrosDados.module.css'

//Interface
import { ILivros } from '../modelo/Livro'




interface Props  {
  btnText: string
  taskList: ILivros[]
  setTaskList?: React.Dispatch<React.SetStateAction<ILivros[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {


  // iniciando o formulario => aula 332
  const [codEditora, setcodEditora] = useState<number>(0)
  const [titulo, setTitulo] = useState<string>("") 
  const [resumo, setResumo] = useState<string>("")
  const [editora, setEditora] = useState<string>("")
  const [autores, setAutores] = useState<string>("")

// criar uma função para inclusao de tarefaas no sistema

const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const codEditora = Math.floor(Math.random() * 1000)
  const newTask: ILivros = {codEditora, titulo, resumo, editora, autores}

  setTaskList!([...taskList, newTask])

  setTitulo("");
  setcodEditora(0);
  setResumo("");
  setEditora("")
  setAutores("")
  console.log(taskList);




}

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "titulo"){
      setTitulo(e.target.value)
  }else{
    setcodEditora(parseInt(e.target.value))
  }
}

const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "resumo"){
      setResumo(e.target.value)
  }else{
    setcodEditora(parseInt(e.target.value))
  }
}

const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "editora"){
      setEditora(e.target.value)
  }else{
    setcodEditora(parseInt(e.target.value))
  }
}

const handleChange4 = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "autores"){
      setAutores(e.target.value)
  }else{
    setcodEditora(parseInt(e.target.value))
  }
}
return (
    
  <form   onSubmit = {addTaskHandler} className={styles.form}>
    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Titulo:</label>
    <input type='text' name= 'titulo' 
    onChange={handleChange}
    value={titulo}/>
    </div>

    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Resumo:</label>
    <input type='text' name= 'resumo'  
    onChange={handleChange2}
    value={resumo}/>
    </div>

    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Editora:</label>
    <input type='text' name= 'editora'  
    onChange={handleChange3}
    value={editora}/>
    </div>

    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Autores:</label>
    <input type='text' name= 'autores' 
    onChange={handleChange4}
    value={autores}/>
    </div>


    <input type='submit' value={btnText} 
    onChange={handleChange}/>
    
    </form>
  )
};

export default TaskForm
