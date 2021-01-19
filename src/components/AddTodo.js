import React from 'react';

class AddTodo extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			"todoTitle":""
		}

	}

	handleChange = (e)=>{
		this.setState({
			"todoTitle": e.target.value
		})
	}

	handleClick = (e)=>{
		console.log( this.state.todoTitle );
		console.dir(this.props)

		this.props.addTodo({
			// HW: make the new todo object, which will be passed to App.addTodo()
		});
	}

	render(){
		return (
			<div className="addTodo">
				<input
					name="todoTitle"
					type="text"
					autoFocus
					placeholder="add new todo ..."
					value={this.state.todoTitle}
					onChange={this.handleChange}/>
				<button className="btnAdd" onClick={this.handleClick}>Add</button>
			</div>
		 )
	}
}

export default AddTodo;