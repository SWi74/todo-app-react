import React from 'react';

import { StyledItem } from "./styled"

const TodoItem = ( {todo, newRem, newTogg} ) => {
	const handleRemove = (e) => {
		newRem(todo.id)
	}

	const handleToggleComplete = (e) => {
		newTogg(todo.id);
	}
	
	return (
		<StyledItem>

			<div>
				<span>{todo.id}.</span>
				<span style={todo.completed ? { textDecoration: "line-through" } : {textDecoration: "none"} }>{todo.title}</span>
			</div>
			
			<svg onClick={handleToggleComplete} width="50px" x="0px" y="0px" viewBox="0 0 50 50">
				{todo.completed ? 
					<path d="M32,16H18c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V18C34,16.9,33.1,16,32,16z M23,30l-5-5l1.41-1.41 L23,27.17l7.59-7.59L32,21L23,30z"/>
				:
					<path d="M32,18v14H18V18H32 M32,16H18c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V18C34,16.9,33.1,16,32,16z"/>
				}
			</svg>
			
			<svg onClick={handleRemove} width="50px" x="0px" y="0px" viewBox="0 0 50 50">
				<path d="M19,32c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V20H19V32z M32,17h-3.5l-1-1h-5l-1,1H18v2h14V17z"/>
			</svg>


		</StyledItem>
	 );
}

export default TodoItem;