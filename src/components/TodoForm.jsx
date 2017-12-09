import React, { Component } from 'react';

export default class TodoForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: 0,
			todoName: '',
			isCompleted: false,
			isEditable: false
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange (e) {
		let { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}


	onSubmit (e) {
		e.preventDefault()
		this.props.formData(this.state)
		this.setState({id: this.state.id + 1, todoName: ''})
	}
	

	render () {
		return (
			<form onSubmit={this.onSubmit}>
				<input name="todoName" value={this.state.todoName} onChange={this.onChange} />
				<input type="submit" value="Add todo"/>
			</form>
		)
	}
};

