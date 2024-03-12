import {useState} from 'react'

function TodoItem() {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState();

  return (
    // <div>TodoItem</div>
    <li>
      {editing ? (<input
          type="text" value={editText} onChange={handleTextChange} />) : (
            <div>
              <input
                type="text" 
                checked={completed} 
                onChange={function(){
                  toggleComplete;
                }} />
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