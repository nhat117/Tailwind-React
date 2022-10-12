import React, { Fragment } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todos = () => {
	const [todoState, setTodoState] = React.useState([
		{
			id: 1,
			title: "Task1",
			isFinshed: false
		},
		{
			id: 2,
			title: "Task2",
			isFinshed: false
		},
		{
			id: 3,
			title: "Task3",
			isFinshed: false
		}
	]);

	const handleDelete = (id) => {
		const newTodos = todoState.filter((todo) => todo.id !== id);
		setTodoState(newTodos);
	}

	const handleComplete = (id) => {
		const newTodos = todoState.map((todo) => {
			if (todo.id === id) {
				todo.isFinshed = !todo.isFinshed;
			}
			return todo;
		});
		setTodoState(newTodos);
	}

	return (
		<div className="flex-row space-y-5">
			<AddTodo/>
			{todoState.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} callback = {handleComplete}  callbackDelete = {handleDelete} />;
			})}
		</div>
	);
};

export default Todos;
