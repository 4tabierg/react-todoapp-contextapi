import { createContext, useReducer } from 'react';

const initialState = {
    todos: [
        {id:1, name:'Beginner React Projects'}
    ]
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case 'SET_TODO':
            const newTodos = [...state.todos]
            newTodos.forEach((todo) => {
                console.log(todo)
                console.log(action.payload.id)
                if (todo.id === action.payload.id) {
                    todo.name = action.payload.value
                    console.log(todo)
                }
            })
            
            return {
                todos : newTodos
            }
        default:
            return state;
    }
}


export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={{
            todos: state.todos,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
