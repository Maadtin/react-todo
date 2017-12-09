import React, { Component } from 'react'
import Todo from './Todo'



export default class TodoList extends Component {

	componentWillUnmount() {
		this.props.resetFilter()
	}

	
	render () {
		let { todos, ...newProps } = this.props
		return (
			<ul>	
				{
					todos.map(todo =>
						<Todo {...newProps} {...todo} key={todo.id} />
					)
				}
			</ul>
		)
	}

}

