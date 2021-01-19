import React from 'react';

const TodoItem = ({todo}) => {
	// console.dir(todo);
	return (
		<li>
			<span className="todoID">{todo.id}</span>
			<span className={todo.completed ? "completed" : ""}>{todo.title}</span>
			<div className="removeTodo"><i className="far fa-trash-alt"></i></div>
			<div className="editTodo"><i className="fas fa-check-square"></i></div>
		</li>
	 );
}

export default TodoItem;