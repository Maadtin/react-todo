import React, { Component } from 'react';
import TodoForm from './components/TodoForm'
import Title from './components/Title'

class TodoApp extends Component {


	constructor(props) {
		super(props);
		
		this.state = {
			title: "Todo app",
			todos: []
		}
	}


	formData (todo) {
		this.setState({todos: this.state.todos.concat(todo)});
		console.log(this.state)
	}




	render() {
		return (
			<div>
				<Title title={this.state.title} />
				<TodoForm formData={this.formData.bind(this)} />
			</div>
		);
	}
}

export default TodoApp;