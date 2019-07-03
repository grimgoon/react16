import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [submittedTodo, setSubmittedTodo] = useState(null)
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

        return () => {
            console.log('Cleanup');
        };
    }, []);

    const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    };

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

    useEffect(() => {
        if(submittedTodo) {
            setTodoList(todoList.concat(submittedTodo))
        }
    }, [submittedTodo])

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }

    const todoAddHandler = () => {
        
        axios.post('https://test-help-ooqq.firebaseio.com/todos.json', {name: todoName})
            .then(res => {
                const todoItem = {id: res.data.name, name: todoName} 
                setSubmittedTodo(todoItem);
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