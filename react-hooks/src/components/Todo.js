import React, {useState} from 'react';

const Todo = props => {
    // const [todoName, setTodoName] = useState('');
    // const [todoList, setTodoList] = useState([]);
    
    const [todoState, setTodoState] = useState({userInput: '', todoList: []})

    const inputChangeHandler = (event) => {
        setTodoState({userInput: event.target.value, todoList: todoState.todoList});
    }

    const todoAddHandler = () => {
        setTodoState({userInput: todoState.userInput, todoList: todoState.todoList.concat(todoState.userInput)});
    }

    return  <>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoState.userInput}/>
        <button onClick={todoAddHandler} type="button">Add</button>
        <ul>
            {todoState.todoList.map((todo,i) => <li key={i}>{todo}</li>)}
        </ul>
    </>
}

export default Todo