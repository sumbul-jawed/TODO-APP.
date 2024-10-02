import { useRef, useState } from 'react';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const getInputValue = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (getInputValue.current?.value) {
      setTodos([...todos, getInputValue.current.value]);
      getInputValue.current.value = ''; // Clear input after adding
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index: number) => {
    const newValue = prompt('Enter a New Value');
    if (newValue) {
      const updatedTodos = [...todos];
      updatedTodos[index] = newValue;
      setTodos(updatedTodos);
    }
  };
  return (
    <div className="todo-container">
      <center>
        <h2>
          <u>TO-DO APP</u>
        </h2>
      </center>

      <br />

      <input type="text" placeholder="Enter your Todo Item" ref={getInputValue} />

      <button className="add-todo" onClick={addTodo}>
        Add Todo
      </button>

      <ul className='todo-list'>
        {todos.map((item, index) => (
          <li key={index}>
            {item}

            <div>
              <button className="delete-todo" onClick={() => deleteTodo(index)}>
                Delete
              </button>

              <button className="edit-todo" onClick={() => editTodo(index)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
   </div>
  );
}