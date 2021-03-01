import React, {useState} from 'react';
import './App.css';
import List from './components/List.tsx';
import Add from './components/Add.tsx';
import {ToDo} from './todo.model.ts';
import {v4 as uuidv4} from 'uuid';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const newToDo = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: uuidv4(), text:text}
    ])
  }

  return (
    <div>
      <h1>TO DO LIST</h1>
      <Add newToDo={newToDo}/>
      <List items={todos}/>
    </div>
  )
}

export default App;
