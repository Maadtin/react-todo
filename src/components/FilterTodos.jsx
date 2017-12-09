import React, { Component } from 'react'


export default class FilterTodos extends Component {

	constructor(props) {
		super(props);
		

		this.onChange = this.onChange.bind(this)
	}
	


	onChange (e) {
		this.props.filter(e.target.value)
	}
	

	render () {
		return (
			<div>
				<label>
					Mostrar todos
					<input type="radio"
						onChange={this.onChange}
						checked={this.props.currentFilter === 'showAll'}
						name="filterTodos"
						value="showAll" />
				</label>
				<label>
					Mostrar completados
					<input type="radio" 
					onChange={this.onChange} 
					name="filterTodos" 
					value="showCompleted"
					checked={this.props.currentFilter === 'showCompleted'}
					/>
				</label>
				<label>
					Mostrar no completados
					<input type="radio" 
					onChange={this.onChange} 
					name="filterTodos" 
					value="showNotCompleted"
					checked={this.props.currentFilter === 'showNotCompleted'}
					/>
				</label>

			</div>
		)
	}
}
