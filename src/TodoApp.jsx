import React, { Component } from 'react';
import TodoForm from './components/TodoForm'
import Title from './components/Title'
import TodoList from './components/TodoList'
import FilterTodos from './components/FilterTodos'
import TodosCounter from './components/TodosCounter'

class TodoApp extends Component {


	constructor(props) {
		super(props);
		
		this.state = {
			todoUpdate: '',
			filter: 'showAll',
			title: "To-do app",
			todos: []
		}

		this.formData = this.formData.bind(this)
		this.handleOnDelete = this.handleOnDelete.bind(this)
		this.handleOnUpdate = this.handleOnUpdate.bind(this)
		this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this)
		this.handleFilter = this.handleFilter.bind(this)
		this.resetFilter = this.resetFilter.bind(this)
		this.getCounter = this.getCounter.bind(this)
		this.handleOnTodoChange = this.handleOnTodoChange.bind(this)
		this.handleOnSaveChange = this.handleOnSaveChange.bind(this)
	}


	formData (todo) {
		this.setState({todos: this.state.todos.concat(todo)});
	}

	handleOnDelete (id) {
		this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
	}

	handleOnUpdate (id, mode) {

		let todo = this.state.todos.find(todo => todo.id === id)

		if (mode === 'edit') {
			todo.isEditable = !todo.isEditable
		} else {
			todo.isCompleted = !todo.isCompleted
		}

		this.setState({todos: [...this.state.todos, ...todo]})
	}

	handleOnSaveChange (id) {
		let todo = this.state.todos.find(todo => todo.id === id)
		todo.todoName = this.state.todoUpdate
		todo.isEditable = !todo.isEditable
		
		this.setState({todos: [...this.state.todos, ...todo], todoUpdate: ''})
		
	}


	handleOnTodoChange(todo) {
		this.setState({ todoUpdate: todo })
	}



	handleFilter(todo) {
		switch (this.state.filter) {
			case 'showCompleted':
				return todo.isCompleted
			case 'showNotCompleted':
				return !todo.isCompleted
			default: return todo
		}	
	}

	handleOnChangeFilter (filter) {
		this.setState({filter})
	}
	
	
	resetFilter () {
		this.setState({filter: 'showAll'})
	}

	getCounter (criteria) {
		return this.state.todos.filter(todo => 
			criteria === 'completed' 
			? todo.isCompleted : 
			!todo.isCompleted
		).length 
	}
	


	render() {
		let todos = this.state.todos.filter(this.handleFilter)
		let nCompleted = this.getCounter('completed');
		let nNotcompleted = this.getCounter('notcompleted')
		return (
			<div>
				<Title title={this.state.title} />
				<TodoForm formData={this.formData} />
				<TodosCounter 
					all={this.state.todos.length} 
					completed={nCompleted} 
					notCompleted={nNotcompleted} 
				/>	
				{this.state.todos.length > 0 && <FilterTodos currentFilter={this.state.filter} filter={this.handleOnChangeFilter} />}	
				{
					this.state.todos.length > 0
						? <TodoList
							resetFilter={this.resetFilter}
							todos={todos}
							onDelete={this.handleOnDelete}
							onUpdate={this.handleOnUpdate}
							onSaveChange={this.handleOnSaveChange}
							onInputChange={this.handleOnTodoChange}
						/>
						: <h1>No todos...</h1>
				}
			</div>
		);
	}
}

export default TodoApp;