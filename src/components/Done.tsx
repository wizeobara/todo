import React from 'react';

//interface - define
interface ListProps {
  items: { _id: string; description: string }[];
}

const Done: React.FC<ListProps> = ({items}) => {
  return (
    <section>
        <h2>FINISHED TASKS</h2>
        <ul>
            {items.map((list) => (
            <div key={list._id}>
                <li >{list.description}</li>
            </div>
      ))}
        </ul>
    </section>
  );
};


export default Done;