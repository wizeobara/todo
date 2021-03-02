import React, { useState } from 'react';
import List from '../components/List';
import Add from '../components/Add';
import { ToDo } from '../todo.model';
import { v4 as uuidv4 } from 'uuid';
// import Done from './components/Done'

const Main: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const newToDo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text: text }]);
  };
  const deleteToDo = (id: string) => {
    setTodos(todos.filter((v) => v.id !== id));
  };
  const doneToDo = (id: string) => {
    setTodos(todos.filter((v) => v.id !== id));
  };

  return (
    <div>
      <Add newToDo={newToDo} />
      <List items={todos} deleteToDo={deleteToDo} doneToDo={doneToDo} />
      {/* <Done /> */}
    </div>
  );
};

export default Main;
