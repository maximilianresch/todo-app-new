import React from "react";
import "../pages/styles.css";

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
        id: Math.floor(Math.random()* 10000)
      },
    ]);
  };

  return (
    <div className="flex-form">
      <form>
        <input value={inputText} type="text" onChange={inputTextHandler} />
        <div className="flex-button">
        <button type="submit" onClick={submitHandler}>Create new Task</button>
        </div>
      </form>
    </div>
  );
}
