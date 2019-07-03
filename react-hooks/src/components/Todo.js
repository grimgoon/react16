import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
  const [submittedTodo, setSubmittedTodo] = useState(null);
  // const [todoList, setTodoList] = useState([]);
  

  useEffect(() => {
    axios.get("https://test-help-ooqq.firebaseio.com/todos.json").then(res => {
      const todoData = res.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({ id: key, name: todoData[key].name });
      }
      dispatch({ type: "SET", payload: todos });
    });

    return () => {
      console.log("Cleanup");
    };
  }, []);

  const mouseMoveHandler = event => {
    console.log(event.clientX, event.clientY);
  };

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.payload);
      case "SET":
        return action.payload;
      case "REMOVE":
        return state.filter(todo => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const [todoList, dispatch] = useReducer(todoListReducer, []);

  useEffect(() => {
    if (submittedTodo) {
      dispatch({ type: "ADD", payload: submittedTodo });
    }
  }, [submittedTodo]);

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    axios
      .post("https://test-help-ooqq.firebaseio.com/todos.json", {
        name: todoName
      })
      .then(res => {
        const todoItem = { id: res.data.name, name: todoName };
        setSubmittedTodo(todoItem);
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button onClick={todoAddHandler} type="button">
        Add
      </button>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
