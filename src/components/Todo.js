const Todo = ({text}) => {
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="list-button" id="complete">✓</button>
            <button className="list-button" id="delete">X</button>
        </div>
    )
}

export default Todo;