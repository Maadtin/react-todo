import React from 'react';
import { FaCheck, FaTrash, FaPencil, FaFloppyO } from 'react-icons/lib/fa'

let styles = {
	cursor: 'pointer'
}

const Todo = ({ isCompleted, todoName, isEditable, onDelete, onSaveChange, onInputChange, onUpdate, index, id}) => {
	let defaultName = todoName || 'Tarea no especificada';
	return (
		<li>
			{
				isEditable
				? <input 
						defaultValue={defaultName} 
						onChange={e => onInputChange(e.target.value)} 
					/>
				: <span>{defaultName}</span>
			}
			{
				isEditable
				? <FaFloppyO style={styles} onClick={() => onSaveChange(id)}  />
				: <FaPencil style={styles} onClick={() => onUpdate(id, 'edit')} />
			}
			<FaCheck color={isCompleted ? 'green' : ''} onClick={() => onUpdate(id)} style={styles} />
			<FaTrash onClick={() => onDelete(id)} style={styles}  />
		</li>
	)
}


export default Todo;