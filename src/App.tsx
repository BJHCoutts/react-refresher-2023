import { useState } from 'react'
import './styles.css'
import { ToDo } from './types'
import NewToDoForm from './components/NewToDoForm'
import ToDoList from './components/ToDoList'

export default function App() {

  const [toDos, setToDos] = useState<[] | ToDo[]>([])

  function addToDo(title:string) {

    setToDos((prevToDos:[] | ToDo[]) => {

      const newTodo: ToDo = {
        id: crypto.randomUUID(),
        title,
        completed: false
      }

      return(
        [
          ...prevToDos, 
          newTodo
        ]
      )
    })
  }

  function toggleToDo(id:string, completed:boolean) {
    setToDos( (prevToDos) => {
      return (
        prevToDos.map(toDo => {
          if (toDo.id === id) {
            return {...toDo, completed}
          }
          return toDo
        })
        )
    })
  }

  function deleteToDo(id:string) {
    setToDos( (prevToDos) => {
      return(
      prevToDos.filter(toDo => toDo.id !== id)
    )})
  }

  return (
    <>

      <NewToDoForm addToDo={addToDo}/>

      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>

    </>
  )
}