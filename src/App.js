import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <Form text={text} setText={setText} todos={todos} setTodos={setTodos}/>
        <TodoList />
      </header>
    </div>
  );
}

export default App;