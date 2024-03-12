import {useReducer} from 'react'
import TodoItem from './TodoItem'


function listReducer() {
    switch () {
        case add:
            return ;

        case remove:
            return ;
    
        case complete:
            return ;
        
        case edit:
            return ;
        
    }
}


function TodoList() {
    
    


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