import React from 'react';

const AddTodo = (props) => {
	return (
		<div className="addTodo">
			<input type="text" autoFocus placeholder="add new todo ..."/>
			<button className="btnAdd">Add</button>
		</div>
	 );
}

export default AddTodo;