import React from "react";
import TodoExample from "./TodoExample";
import "../pages/styles.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoExample
          className="todo"
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
