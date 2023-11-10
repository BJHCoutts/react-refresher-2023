import { ToDo } from "../types"
import ToDoListItem from "./ToDoListItem"

interface IToDoList {
	toDos: ToDo[]
	toggleToDo: (id:string, completed:boolean) => void
	deleteToDo: (id:string) => void
}

export default function ToDoList({toDos, toggleToDo, deleteToDo}:IToDoList) {
	return(
		<>
		<h1 className="header">Todo List</h1>

		<ul className="list">

			{toDos.length === 0 && "No ToDos, Please Add!"}
			{toDos.map( (toDo:ToDo) => {
				return (                
					<ToDoListItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
				)
			})}

		</ul>
		</>
	)
}