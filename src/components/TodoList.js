import React from 'react';
import TodoItem from "./TodoItem";

import { StyledToDoList } from "./styled"

const TodoList = (props) => {
	const rem = props.removeTodo
	const togg = props.toggleComplete
	return (
		<StyledToDoList>
		{/* <StyledToDoList className="todoListItems"> */}
			{props.todos.map( todo => <TodoItem newRem={rem} newTogg={togg} todo={todo} key={todo.id}/>)}
		</StyledToDoList>
	)
}

export default TodoList;