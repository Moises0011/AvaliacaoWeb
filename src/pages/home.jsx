import React, { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 0; i++) {
    initialTodos.push({
      id: i,
      text: "item" + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  const [item, setItem] = useState("");

  return (
    <>
      <h1 style={{ fontSize: "25px", margin: "15px" }}>Home</h1>
      <label style={{ color: "red" }}>Digite um item:</label>
      <input
        style={{ margin: "5px" }}
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button
        className="btn"
        onClick={() => {
          setText(item);
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Adicionar
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
