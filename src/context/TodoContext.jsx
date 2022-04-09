import React, { createContext, useState, useEffect } from "react"

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([])
	const [selectedTodo, setSelectedTodo] = useState(null)

	const addTodo = (todo) => {
		const newTodos = [...todos, todo]
		setTodos(newTodos)
		localStorage.setItem("todos", JSON.stringify(newTodos))
	}

	const toggleTodo = (todo) => {
		const newTodos = todos.map((todoItem) =>
			todoItem.id === todo.id ? { ...todoItem, completed: !todoItem.completed } : todoItem
		)
		setTodos(newTodos)
		localStorage.setItem("todos", JSON.stringify(newTodos))
	}

	const selectTodo = (todo) => {
		setSelectedTodo(todo)
		localStorage.setItem("selectedTodo", JSON.stringify(todo))
	}

	const editTodo = (todo) => {
		const newTodos = todos.map((todoItem) => (todoItem.id === todo.id ? todo : todoItem))
		setTodos(newTodos)
		localStorage.setItem("todos", JSON.stringify(newTodos))
	}

	const deleteTodo = (todo) => {
		const newTodos = todos.filter((todoItem) => todoItem.id !== todo.id)
		setTodos(newTodos)
		localStorage.setItem("todos", JSON.stringify(newTodos))
	}

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem("todos")) || [])
		setSelectedTodo(JSON.parse(localStorage.getItem("selectedTodo")) || null)
	}, [])

	const value = { todos, selectedTodo, selectTodo, addTodo, toggleTodo, editTodo, deleteTodo }

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoContext

