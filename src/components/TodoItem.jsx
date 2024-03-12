import {useState} from 'react'

function TodoItem({todo}) {

  const [editing, setEditing] = useState(false);
  // const [editText, setEditText] = useState(todo.text);  // temp commenting out - console error

  return (
    // <div>TodoItem</div>
    <li>
      {editing ? (<input
          type="text" value={editText} onChange={handleTextChange} />) : (
            <div>
              <input
                type="text" 
                // checked={todo.completed}     // temp commenting out - console error
                onChange={function(){
                  toggleComplete;
                }} />
                {/* <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
                </span>         // temp commenting out - console error    */}     
            </div>
          )}
          <button>
            Edit
          </button>
          <button>
            Delete
          </button>
    </li>
  );
}

export default TodoItem