import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/List';
import Add from '../components/Add';
import { ToDo } from '../todo.model';
import { Link } from 'react-router-dom';
import Done from '../components/Done';

const Main: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [done, setDone] = useState<ToDo[]>([]);
  const [query, setQuery] =useState("react")

  useEffect(() => {
    axios.get('http://localhost:5000/progress').then((res) => {
      setTodos(res.data);
      console.log(todos);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/done').then((res) => {
      setDone(res.data);
      console.log(done);
    });
  }, []);

  const deleteToDo = (_id: string) => {
    axios.delete('http://localhost:5000/progress/' + _id).then((res) => {
      console.log(res.data);
      location.reload();
    });
  };

  const doneToDo = (_id: string) => {
    axios.get('http://localhost:5000/progress/' + _id).then((res) => {
        axios.post('http://localhost:5000/done', res.data);
        
    }).then(() => {
        axios.delete('http://localhost:5000/progress/' + _id).then((res) => {
            console.log(res.data);
            location.reload();
        })
    })
  };
  
  const editToDo = (_id: string) => {
    const newInput = {
      description: query,
    };
    axios
      .post('http://localhost:5000/progress/update/' + _id, newInput)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <Add />
      <List items={todos} deleteToDo={deleteToDo} doneToDo={doneToDo} 
      editToDo={editToDo} setQuery={setQuery}/>
      <Done items={done} />
      <Link to="/sub">Sub Page...</Link>
    </div>
  );
};

export default Main;
