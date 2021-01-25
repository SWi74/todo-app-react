import React from 'react';

import { StyledItem } from "./styled"

const TodoItem = ( {todo, removeTodo, toggleComplete} ) => {
	const handleRemove = (e) => {
		removeTodo(todo.id)
	}

	const handleToggleComplete = (e) => {
		toggleComplete(todo.id);
	}
	
	return (
		<StyledItem>

			<div>
				<span>{todo.id}.</span>
				<span style={todo.completed ? { textDecoration: "line-through" } : {textDecoration: "none"} }>{todo.title}</span>
			</div>
			
			<svg onClick={handleToggleComplete} width="18" height="18" viewBox="0 0 18 18">
				{todo.completed ? 
					<path d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" transform="translate(-3 -3)"/>
				:
					<path d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" transform="translate(-3 -3)"/>
				}
			</svg>
			
			<svg onClick={handleRemove} width="50px" x="0px" y="0px" viewBox="0 0 50 50">
				<path d="M19,32c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V20H19V32z M32,17h-3.5l-1-1h-5l-1,1H18v2h14V17z"/>
			</svg>


		</StyledItem>
	 );
}
// const TodoItem = ( {todo, removeTodo, toggleComplete} ) => {
// 	const handleRemove = (e) => {
// 		console.log(`delete click`);
// 		removeTodo(todo.id)
// 	}

// 	const handleToggleComplete = (e) => {
// 		toggleComplete(todo.id);
// 	}
	
// 	function checkComplete(todo) {
// 		return todo.completed ? <Complete /> : <NotComplete /> 
// 	}

// 	return (
// 		<StyledItem>
// 			{/* <label htmlFor={todo.id}>
// 				<input id={todo.id} type="checkbox" /> */}
// 			<div>
// 				<span>{todo.id}.</span>
// 				<span style={todo.completed ? { textDecoration: "line-through" } : {textDecoration: "none"} }>{todo.title}</span>
// 			</div>
// 			{/* </label> */}
			
// 			{checkComplete(todo)}

// 			<Delete />
			
// 		</StyledItem>
// 	 );
// }

export default TodoItem;