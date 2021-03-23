import React, {useContext,useState} from 'react'
import {AppContext} from '../context/AppContext'


const ToDoForm = () => {

    const {dispatch} = useContext(AppContext);
    const [todo, setTodo] = useState('');
    
    const resetForm = () => {
        setTodo('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const todos = {
            id: Math.floor(Math.random() * 100 + 1),
            name : todo,
        }

        dispatch({
            type: 'ADD_TODO',
            payload: todos
        })
        resetForm();
        
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <form onSubmit={handleSubmit}>
                <input id='todoInput' type='text' className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add New Task"></input>
                <button type='submit' className='btn btn-success mt-3 float-right'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default ToDoForm
