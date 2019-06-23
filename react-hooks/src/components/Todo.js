import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://test-help-ooqq.firebaseio.com/todos.json')
            .then((res) => {
                const todoData = res.data;
                const todos = []
                for(const key in todoData) {
                    todos.push({id: key, name: todoData[key].name});
                }
                setTodoList(todos);
            });
    }, []);

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
        axios.post('https://test-help-ooqq.firebaseio.com/todos.json', {name: todoName})
            .then(res => {  
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return  <>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName}/>
        <button onClick={todoAddHandler} type="button">Add</button>
        <ul>
            {todoList.map((todo,i) => <li key={i}>{todo.name}</li>)}
        </ul>
    </>
}

export default Todo