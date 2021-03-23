import React, { useContext, useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
import { EditToDo } from './EditToDo'


export const ToDoItem = (props) => {


    const [isEditing, setIsEditing] = useState(false)
    const { dispatch } = useContext(AppContext)


    const deleteTodo = () => {
        dispatch({
            type: 'DELETE_TODO',
            payload: props.id
        })
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };


    const handleSaveClick = (value, id) => {

        dispatch({
            type: 'SET_TODO',
            payload: {
                value,
                id
            }
        })
        setIsEditing(false);
    };


    if (isEditing) {
        return (
            <EditToDo handleSaveClick={handleSaveClick} id={props.id} name={props.name} />
        )
    }
    else {
        return (
            <div className='mt-2'>
                <li className='list-group-item d-flex justify-content-between align-center bg-dark text-white'>
                    {props.name}
                    <div>
                        <FaEdit className='mr-2' onClick={handleEditClick} />
                        <FaTimesCircle onClick={deleteTodo} />

                    </div>
                </li>
            </div>
        )
    }


}

// export default ToDoItem
