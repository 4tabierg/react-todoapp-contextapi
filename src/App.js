import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoForm from './components/ToDoForm';
import { AppProvider } from './context/AppContext';
import ToDoList from './components/ToDoList';
import './App.css'


function App() {
  return (
    <AppProvider>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
        <h1 className='text-center mt-4 text-white'>ToDo App</h1>
        </div>
        <div className='col-md-6 offset-md-3 mt-4'>
        <ToDoForm />
        <ToDoList/>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
