import React from "react";
import PropTypes from 'prop-types'

const TodoItem = (props) => {
    const todo = props.todo;
    const callback = props.callback;
    const callbackDelete = props.callbackDelete;
	return (
		<div className='bg-gray-400 flex items-center justify-center p-5 space-x-4'>
			<input type='checkbox' onChange={callback.bind(this,todo.id)} checked={todo.completed} />
            {
                todo.completed ?  <p className='line-through'>{todo.title}</p> : <p>{todo.title}</p>             
            }
			<button className='bg-red-500 text-white font-bold py-2 px-4 rounded' onClick={callbackDelete.bind(this,todo.id)}>
				Delete
			</button>
		</div>
	);
};

//PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    callback : PropTypes.func.isRequired,
    callbackDelete : PropTypes.func.isRequired
}

export default TodoItem;
