import React, {useState} from 'react';

const Todo = props => {
    const [todoName, setTodoName] = useState('');

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }

    return  <>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName}/>
        <button type="button">Add</button>
        <ul>

        </ul>
    </>
}

export default Todo