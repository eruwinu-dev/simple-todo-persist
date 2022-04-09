import React, { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"

const AddTodo = () => {
	const { addTodo, todos } = useContext(TodoContext)
	const [title, setTitle] = useState("")

	const formHandler = (event) => {
		event.preventDefault()
		setTitle(event.target.value)
	}

	const addTodoHandler = () => {
		if (title) {
			const todo = { id: todos.length + 1, title, completed: false }
			addTodo(todo)
			setTitle("")
		}
	}

	return (
		<div className="add-todo">
			<input type="text" placeholder="Add Todo" value={title} onChange={formHandler} />
			<button type="button" className="add-todo-button" onClick={addTodoHandler}>
				Add
			</button>
		</div>
	)
}

export default AddTodo

