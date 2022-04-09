import React, { useContext } from "react"
import TodoContext from "../../context/TodoContext"
import Todo from "./Todo"

const TodoList = () => {
	const { todos } = useContext(TodoContext)
	return (
		<div className="todo-list">
			{todos.length ? todos.map((todo, index) => <Todo todo={todo} key={index} />) : <h4>No todos.</h4>}
		</div>
	)
}

export default TodoList

