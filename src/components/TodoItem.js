import React from 'react';

import { StyledItem } from "./styled"

const TodoItem = ( {todo, removeTodo,toggleComplete} ) => {
	const handleRemove = (e) => {
		console.log(`delete click`);
		removeTodo(todo.id)
	}

	const handleToggleComplete = (e) => {
		toggleComplete(todo.id);
	}
	
	return (
		<StyledItem>
			<label htmlFor={todo.id}>
				<input id={todo.id} type="checkbox" />
				<span className="todoID">{todo.id}.</span>
				<span className={todo.completed ? "completed" : ""}>{todo.title}</span>
			</label>
			
			<svg width="50px" x="0px" y="0px" viewBox="0 0 50 50">
				<path id="ic_edit_24px" d="M16,30.25V34h3.75l11.06-11.06l-3.75-3.75L16,30.25z M33.71,20.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34 c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75C31.88,21.87,33.71,20.04,33.71,20.04z"/>
			</svg>
			<svg width="50px" x="0px" y="0px" viewBox="0 0 50 50">
				<path id="ic_delete_24px" d="M19,32c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V20H19V32z M32,17h-3.5l-1-1h-5l-1,1H18v2h14V17z"/>
			</svg>
		</StyledItem>
	 );
}

export default TodoItem;