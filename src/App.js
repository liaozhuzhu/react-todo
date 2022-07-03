import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilter(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilter(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <Form text={text} setText={setText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
        <TodoList setTodos={setTodos} todos={todos} filter={filter}/>
      </header>
    </div>
  );
}

export default App;