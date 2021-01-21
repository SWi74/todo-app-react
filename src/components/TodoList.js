import React from 'react';
import TodoItem from "./TodoItem";

import { StyledToDoList } from "./styled"

const TodoList = (props) => {
	return (
		<StyledToDoList className="todoListItems">
			{props.todos.map( todo => <TodoItem todo={todo} key={todo.id}/>)}
		</StyledToDoList>
	)
}

export default TodoList;