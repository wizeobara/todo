import axios from 'axios';
import React, {useRef} from 'react';

//type - props interface
type newToDo = {
    newToDo: (text: string) => void
}

const Add: React.FC<newToDo> = () => {
    //Initial value of null
    const todoInput = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const newText = {
            description: todoInput.current?.value ?? ''
        }
        axios.post("http://localhost:5000/progress", newText)
            .then(res => console.log(res.data))
            location.reload();
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type='text' id='todo-text' ref={todoInput}></input>
            </div>
            <button type='submit'>
                ADD!
            </button>
        </form>
    )
}

export default Add;