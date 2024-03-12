import {useReducer} from 'react'
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


    function addItem(text) {
        dispatch({type: 'ADD-TODO', playload: text});
    }

    function removeItem(text) {
        dispatch({type: 'REMOVE-TODO', playload: text});
    }

    function toggleComplete(text) {
        dispatch({type: 'TOGGLE-COMPLETE', playload: text});
    }

    function editItem(text, newText) {
        dispatch({type: 'EDIT-TODO', playload: {text: newText} });
    }




    return (
        <div>
            <h1>Create To Do List</h1>
            <input 
                type="text"
                placeholder="Add a task"/>
            <ul>
                <TodoItem />
            </ul>
        </div>
    );
}

export default TodoList