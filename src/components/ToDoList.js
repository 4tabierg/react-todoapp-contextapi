import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import { ToDoItem } from './ToDoItem';


const ToDoList = () => {

    const {todos} = useContext(AppContext);

    return (
        <div className='mt-3'>
            <ul className='list-group'>
                {todos.map(((todo,index) => (
                    <ToDoItem key={index} id={todo.id} name={todo.name} todos={todos} />
                )))}
            </ul>
        </div>
    )
};

export default ToDoList;
