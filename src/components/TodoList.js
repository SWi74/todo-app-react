import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
	return (
		<ul className="todoListItems">
			{props.todos.map( todo => <TodoItem todo={todo} key={todo.id}/>)}
		</ul>
	)
}

export default TodoList;