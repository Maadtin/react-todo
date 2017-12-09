import React from 'react'


const TodosCounter = ({all, completed, notCompleted}) => (
	<div>
		<strong>Tareas ({all})</strong>
		<strong>Completadas ({completed})</strong>
		<strong>No completadas ({notCompleted}) </strong>
	</div>
)

export default TodosCounter