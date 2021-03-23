import React from 'react'
import { useState } from 'react/cjs/react.development'

export const EditToDo = (props) => {
    const [todo, setTodo] = useState(props.name)

    return (
        <div className='mt-2'>
                <li className='list-group-item d-flex justify-content-between align-center bg-primary text-white'>
                    <input className='form-control' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button className='btn btn-dark ml-2 text-white' onClick={() => props.handleSaveClick(todo,props.id)} >Save</button>
                </li>
            </div>
    )
}
