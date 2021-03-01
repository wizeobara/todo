import React from 'react';

//interface - define 
interface ListProps {
    items: {id: string, text: string}[]
}

const List: React.FC<ListProps> = props => {
   
    return (
        <ul>
            {props.items.map(list => (
                <div>
                    <li key={list.id}>{list.text}</li>
                    {/* <button type='submit' key={list.id}></button> */}
                </div>
            ))}
        </ul>
    )
}

export default List