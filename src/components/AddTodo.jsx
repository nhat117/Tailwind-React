import React from 'react'
import PropTypes from 'prop-types'


const AddTodo = (props) => {
    const [title, setTitle] = React.useState('');

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form action="" className='flex space-x-4'>
            <input type="text" onChange={changeTitle} name="title" placeholder='Add Task' className='flex-auto p-3'/>
            <input type="submit" value="Add" className='flex-10 bg-blue-500 text-white font-bold spacing py-2 px-4 rounded' />
        </form>
    )
}

AddTodo.propTypes = {
}

export default AddTodo;