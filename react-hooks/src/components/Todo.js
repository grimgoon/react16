import React, {useState} from 'react';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
    }

    return  <>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName}/>
        <button onClick={todoAddHandler} type="button">Add</button>
        <ul>
            {todoList.map((todo,i) => <li key={i}>{todo}</li>)}
        </ul>
    </>
}

export default Todo