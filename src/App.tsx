import { useState } from 'react'
import './styles.css'
import { ToDo } from './types'

export default function App() {

  const [newItem, setNewItem] = useState<string>("")
  const [toDos, setToDos] = useState<[] | ToDo[]>([])

  function handleSubmit(e:React.FormEvent) {
    e.preventDefault()

    setToDos((prevToDos) => {
      return(
        [
          ...prevToDos, {
            id: crypto.randomUUID(),
            title: newItem,
            completed: false
          }
        ]
      )
    })

    setNewItem("")
  }

  function toggleToDo(id:number, completed:boolean) {
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

  function deleteToDo(id) {
    setToDos( (prevToDos) => {
      return(
      prevToDos.filter(toDo => toDo.id !== id)
    )})
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='new-item-form'>

        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)}type="text" id='item'/>
        </div>

        <button className="btn">Add</button>

      </form>

      <h1 className="header">Todo List</h1>

      <ul className="list">

        {toDos.length === 0 && "No ToDos, Please Add!"}
        {toDos.map( (toDo:ToDo) => {
          return (                
            <li key={toDo.id}>
              <label>
                <input type="checkbox" checked={toDo.completed} onChange={e => toggleToDo(toDo.id, e.target.checked)} />
                {toDo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteToDo(toDo.id)}>Delete</button>
            </li>
          )
        })}

      </ul>

    </>
  )
}