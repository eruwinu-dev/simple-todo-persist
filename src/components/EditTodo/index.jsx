import React, { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"

const EditTodo = () => {
	const { selectedTodo, selectTodo, editTodo } = useContext(TodoContext)
	const [title, setTitle] = useState(selectedTodo.title)

	const formHandler = (event) => {
		event.preventDefault()
		setTitle(event.target.value)
	}

	const editTodoHandler = () => {
		if (title) {
			const newTodo = { ...selectedTodo, title }
			editTodo(newTodo)
			selectTodo(null)
		}
	}

	const deSelectTodoHandler = () => {
		selectTodo(null)
	}

	return (
		<div className="edit-todo">
			<input type="text" placeholder="Todo" value={title} onChange={formHandler} />
			<button type="button" className="edit-todo-button" onClick={editTodoHandler}>
				Save
			</button>
			<button type="button" className="deselect-todo-button" onClick={deSelectTodoHandler}>
				Cancel
			</button>
		</div>
	)
}

export default EditTodo

