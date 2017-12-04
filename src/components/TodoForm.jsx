import React, { Component } from 'react';

export default class TodoForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			todoName: '',
			isCompleted: false
		}
	}

	onChange (e) {
		let { name, type, value, checked } = e.target;
		this.setState({
			[name]: type === 'checkbox' ? checked : value 
		})
	}


	onSubmit (e) {
		e.preventDefault()
		this.props.formData(this.state)
	}
	

	render () {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<input name="todoName" value={this.state.todoName} onChange={e => this.onChange(e)} />
				<input type="checkbox" name="isCompleted" checked={this.state.isCompleted} onChange={e => this.onChange(e)} />
				<input type="submit" value="Add todo"/>
			</form>
		)
	}
};

