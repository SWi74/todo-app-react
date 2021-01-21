import React from 'react';

import { StyledAddToDo } from "./styled"

class AddTodo extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			"todoTitle":""
		}

	}

	handleChange = (e) => {
		this.setState({
			"todoTitle": e.target.value
		})
	}

	handleClick = (e) => {
		console.log( this.state.todoTitle );
		console.dir(this.props)

		this.props.addTodo(this.state.todoTitle);
	}

	render() {
		return (
			<StyledAddToDo>
				<input
					name="todoTitle"
					type="text"
					autoFocus
					placeholder="Add new to-do..."
					value={this.state.todoTitle}
					onChange={this.handleChange}/>
				<button className="btnAdd" onClick={this.handleClick}>Add</button>
			</StyledAddToDo>
		 )
	}
}

export default AddTodo;