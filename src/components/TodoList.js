import Todo from "./Todo";

const TodoList = ({todos, setTodos, filterTodo}) => {
    return (
        <div className="todo-container"> 
            <ul className="todo-list">
                {filterTodo.map((todo) => (
                    <Todo text={todo.text} todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
                ))}
            </ul>
        </div>
    ) 
}

export default TodoList;