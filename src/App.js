import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <Form />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
