import { useState } from 'react';
import Todo from './todo';
import TodoForm from './form';
import './App.css'

function App(){
  const [todos, setTodos] = useState([
    {
      text: 'Tarea 1',
      isCompleted: false,
    },
    {
      text: 'Tarea 2',
      isCompleted: false,
    },
    {
      text: 'Tarea 3',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <h1>ToDo List</h1>
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
