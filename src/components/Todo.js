const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) =>  el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) { 
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="list-button" id="complete">✓</button>
            <button onClick={deleteHandler} className="list-button" id="delete">X</button>
        </div>
    )
}

export default Todo;