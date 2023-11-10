import { ToDo } from "../types"

interface IToDoListItem {
	toDo: ToDo
	toggleToDo: (id:string, completed:boolean) => void
	deleteToDo: (id:string) => void
}

export default function ToDoListItem({toDo, toggleToDo, deleteToDo}:IToDoListItem) {
	return(
	<li key={toDo.id}>
	<label>
		<input type="checkbox" checked={toDo.completed} onChange={e => toggleToDo(toDo.id, e.target.checked)} />
		{toDo.title}
	</label>
	<button className="btn btn-danger" onClick={() => deleteToDo(toDo.id)}>Delete</button>
</li>
	)
}