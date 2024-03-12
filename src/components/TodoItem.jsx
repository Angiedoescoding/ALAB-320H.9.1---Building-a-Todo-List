import {useState} from 'react'

function TodoItem({todo, removeItem, toggleComplete, editItem}) {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);  


  function handleEdit() {
    setEditing(true);
  }

  function handleRemove() {
    removeItem(todo.text);
  }

  function handleSave() {
    setEditing(false);
    editItem(todo.text, editText);
  }

  function handleTextChange(e) {
    setEditText(e.target.value)
  }


  return (
    // TodoItem
    <li>
      {editing ? (<input
          type="text" value={editText} onChange={handleTextChange} />) : (
            <div>
              <input
                type="checkbox" 
                checked={todo.completed}     
                onChange={function(){
                  toggleComplete(todo.text);
                }} />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
                </span>              
            </div>
          )}
          <button style="margin-right: 5px" onClick={handleEdit} disabled={editing}>Edit</button>
          <button onClick={handleRemove} disabled={!todo.completed}>Delete</button>
          {editing && 
            <button onClick={handleSave}>Save</button>}
    </li>
  );
}

export default TodoItem