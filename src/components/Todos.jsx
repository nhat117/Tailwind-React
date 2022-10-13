import React, { Fragment, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";

const Todos = () => {
	const [todoState, setTodoState] = React.useState([
	
	]);

	useEffect(() => {
		const getTodo = async () => {
			try{
				let url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
				const res = await axios.get(url)
				setTodoState(res.data);
			} catch(e) {
				console.log(e.message);
			}
		}	
		getTodo()
	},[]);


	const handleDelete = (id) => {
		try {
			let url = `https://jsonplaceholder.typicode.com/todos/${id}`;
			axios.delete(url);
			setTodoState(todoState.filter((todo) => todo.id !== id));
		} catch(e) {
			console.log(e.message);
		}
	}

	const handleComplete = (id) => {
		const newTodos = todoState.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodoState(newTodos);
	}

	const handleAdd = async (title) => {
		const newTodo = {title, completed: false, id: uuidv4()};
		try {
			const res = await axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
			const newTodos = [...todoState, res.data];
			setTodoState(newTodos);
			console.log(res);
		} catch (e) {
			console.log(e.message);
		}
	}

	return (
		<div className="flex-row space-y-5">
			<AddTodo handleAdd = {handleAdd}/>
			{todoState.map((todo) => {
				return <TodoItem key={todoState.id} todo={todo} callback = {handleComplete}  callbackDelete = {handleDelete} />;
			})}
		</div>
	);
};

export default Todos;
