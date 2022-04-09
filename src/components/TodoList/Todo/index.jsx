import React, { useContext } from "react"
import TodoContext from "../../../context/TodoContext"
import EditTodo from "../../EditTodo"

const Todo = ({ todo }) => {
	const { selectedTodo, selectTodo, toggleTodo, deleteTodo } = useContext(TodoContext)

	const selectTodoHandler = () => {
		selectTodo(todo)
	}

	const toggleTodoHandler = () => {
		toggleTodo(todo)
	}

	const deleteTodoHandler = () => {
		deleteTodo(todo)
	}

	return (
		<div className="todo-container">
			{selectedTodo?.id === todo.id ? (
				<EditTodo />
			) : (
				<div className="todo">
					<div>
						<input type="checkbox" checked={todo.completed} onChange={toggleTodoHandler} />
						<span className={todo.completed ? "completed-todo" : ""}>{todo.title}</span>
					</div>
					<div>
						<button type="button" className="select-todo-button" onClick={selectTodoHandler}>
							Edit
						</button>
						<button type="button" className="delete-todo-button" onClick={deleteTodoHandler}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Todo

