import React, {useRef} from 'react';

//type - props interface
type newToDo = {
    newToDo: (text: string) => void
}

const Add: React.FC<newToDo> = props => {
    //Initial value of null
    const todoInput = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const newText = todoInput.current?.value ?? ''
        console.log(newText)
        props.newToDo(newText)
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