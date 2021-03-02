import React from 'react';

//interface - define
interface ListProps {
  items: { id: string; text: string }[];
  deleteToDo: (id: string) => void;
  doneToDo: (id: string) => void;
}

const List: React.FC<ListProps> = ({items, deleteToDo, doneToDo}) => {
  return (
    <ul>
      {items.map((list) => (
        <div key={list.id}>
          <li >{list.text}</li>
          <button onClick={() => deleteToDo(list.id)}>
            DELETE
          </button>
          <button onClick={() => doneToDo(list.id)}>
              DONE
          </button>
        </div>
      ))}
    </ul>
  );
};

// const List = (props) => {
//     const toDoList = props.items.map(
//         (id: string, text: string) => {
//             return (
//                 <div key={list.id}>
//                     <li>{list.text}</li>
//                     <button onClick={()=> props.deleteToDo(list.id)}>DELETE</button>
//                 </div>
//             )
//         }
//     )
//     return (
//         <div>
//             {toDoList}
//         </div>
//     )
// }

export default List;
