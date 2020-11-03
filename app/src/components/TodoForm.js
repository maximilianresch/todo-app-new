import React from "react";
import "../pages/styles.css";
import axios from 'axios';
import * as auth from '../utils/auth'

export default function TodoForm({ todos, setTodos, inputText, setInputText }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);

    const res = await axios.post(
      "http://localhost:4000/me/todos",
      {
        text: inputText,
        completed: false,
      },
      {
        headers: {
          authorization: auth.getUserToken(),
        },
      }
    );
    const data = {
      todos,
      inputText
    }
  };

  return (
    <div className="flex-form">
      <form action="/todos" method="POST">
        <input value={inputText} type="text" onChange={inputTextHandler} />
        <div className="flex-button">
          <button type="submit" onClick={submitHandler}>
            Create new Task
          </button>
        </div>
      </form>
    </div>
  );
}
