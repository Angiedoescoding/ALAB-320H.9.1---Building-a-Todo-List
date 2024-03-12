import {useReducer, useState} from 'react'
import TodoItem from './TodoItem'

const initialState = [];

function listReducer(state, action) {
    switch (action.type) {      // action.type - the type of action of the cases below!
        case 'ADD-TODO':
            return [{text: action.playload, completed: false}, ...state];

        case 'REMOVE-TODO':
            return state.filter(function(todo) {
                return todo.text !== action.playload
            });
    
        case 'TOGGLE-COMPLETE':
            return state.map(function (todo){
                return todo.text === action.playload ? 
                {... todo, completed: !todo.completed} : todo
            });
        
        case 'EDIT-TODO':
            return state.map(function(todo) {
                return todo.text === action.playload.text ?
                 {...todo, text: action.playload.text} : todo
            });
        
        default:
            return state;
    }
}


function TodoList() {
    
    const [todos, dispatch] = useReducer(listReducer, initialState);
    const [name, setName] = useState('')

    function addItem(text) {
        dispatch({type: 'ADD-TODO'});
    }

    function removeItem(text) {
        dispatch({type: 'REMOVE-TODO'});
    }

    function toggleComplete(text) {
        dispatch({type: 'TOGGLE-COMPLETE'});
    }

    function editItem(text, newText) {
        dispatch({type: 'EDIT-TODO', playload: {text, text: newText} });
    }

    function handleSubmit() {
        e.preventDefault();
        dispatch({ type: 'ADD-TODO' })
        setName('')
    }

    return (
        <div>
            <h1>Create To Do List</h1>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add a task"
                value={name}
                onChange={ e => setName(e.target.value)}/>
            <ul>
                {todos.map((todo) => (
                    <TodoItem 
                    todo={todo} 
                    removeItem={removeItem} 
                    toggleComplete={toggleComplete}  
                    editItem={editItem} />
                ))}
            </ul>
            </form>
        </div>
    );
}

export default TodoList