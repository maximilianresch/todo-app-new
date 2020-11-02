import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import './styles.css'
import * as auth from '../utils/auth';
import axios from 'axios';

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

useEffect(() => {
  const res = axios
  .get("http://localhost:4000/me/todos", {
    headers: {
      authorization: auth.getUserToken(),
    },
  })
  .then((res) => {
    console.log("after me");

    const todos = res?.data;
    setTodos(todos)
    console.log("todos", todos);
  })
}, [])

  return (
    <div>
      <h1>ToDo</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} /> 
    </div>
  );
}
