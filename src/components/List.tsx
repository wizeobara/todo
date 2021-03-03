import axios from 'axios';
import React, { useState, useRef } from 'react';
import './List.css';

//interface - define
interface ListProps {
  items: { _id: string; description: string }[];
  deleteToDo: (id: string) => void;
  doneToDo: (id: string) => void;
  editToDo:(id: string) => void;
  setQuery:(description: string) => void;
}

const List: React.FC<ListProps> = ({ items, doneToDo, deleteToDo, editToDo, setQuery }) => {
  const [modal, setModal] = useState(false);


  return (
    <section>
      {items.map((list) => (
        <div key={list._id}>
          <p>{list.description}</p>
          <button onClick={() => doneToDo(list._id)}>DONE</button>
          <button onClick={() => deleteToDo(list._id)}>DELETE</button>
          <button onClick={() => setModal(true)}>EDIT</button>
          <div className={`modal__overlay ${modal && 'is-opened'}`}>
            <div className="modal__box">
              <button
                className="modal__closeBtn"
                onClick={() => setModal(false)}>
                X
              </button>
              <form>
                <input type="text" onChange={(e)=> setQuery(e.target.value)}></input>
                <button onClick={() => editToDo(list._id)}>CHANGE</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default List;
