import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilter] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, status]);

  const saveLocal = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  const getLocal = () => {
    if(localStorage.getItem("todos") === null ) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

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
        <TodoList setTodos={setTodos} todos={todos} filterTodo={filterTodo}/>
      </header>
    </div>
  );
}

export default App;