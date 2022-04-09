import React from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context/TodoContext"
import "./App.css"

const App = () => {
	document.title = "Todo List"
	return (
		<TodoProvider>
			<main>
				<section>
					<h2>Todo List</h2>
					<AddTodo />
					<TodoList />
				</section>
			</main>
		</TodoProvider>
	)
}

export default App

