import React from 'react';

//interface - define
interface ListProps {
  items: { _id: string; description: string }[];
  deleteToDo: (id: string) => void;
  doneToDo: (id: string) => void;
}

const List: React.FC<ListProps> = ({ items, doneToDo, deleteToDo }) => {
  return (
    <ul>
      {items.map((list) => (
        <div key={list._id}>
          <li>{list.description}</li>
          <button onClick={() => doneToDo(list._id)}>DONE</button>
          <button onClick={() => deleteToDo(list._id)}>DELETE</button>
        </div>
      ))}
    </ul>
  );
};

export default List;
