import {useState} from 'react'

interface INewToDoForm {
	addToDo: (title:string) => void
}

export default function NewToDoForm({addToDo}:INewToDoForm) {

	const [newItem, setNewItem] = useState<string>("")

	function handleSubmit(e:React.FormEvent) {
    e.preventDefault()

		addToDo(newItem)

    setNewItem("")
  }

	return(
		<form onSubmit={(e) => handleSubmit(e)} className='new-item-form'>

			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input value={newItem} onChange={e => setNewItem(e.target.value)}type="text" id='item'/>
			</div>

			<button className="btn">Add</button>

		</form>

	)
}