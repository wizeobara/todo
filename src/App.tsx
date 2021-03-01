import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import Add from './components/Add';
import {ToDo} from './todo.model';
import {v4 as uuidv4} from 'uuid';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const newToDo = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: uuidv4(), text:text}
    ])
  }
  const deleteToDo = (id: string) => {
    setTodos(todos.filter(v => v.id !== id))
  }

  return (
    <div>
      <h1>TO DO LIST</h1>
      <Add newToDo={newToDo}/>
      <List items={todos} deleteToDo={deleteToDo}/>
    </div>
  )
}

export default App;