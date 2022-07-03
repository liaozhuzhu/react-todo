import { v4 as uuidv4 } from 'uuid';

const Form = ({text, setText, todos, setTodos, setStatus}) => {

    const inputHandler = (e) => {
        setText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: text, completed: false, id: uuidv4()}
        ])
        setText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form className="todo-form">
            <div className="input-container">
                <input value={text} onChange={inputHandler} type="text" className="todo-input" autoFocus/>
                <button onClick={submitHandler} className="todo-button" type="submit">+</button>
            </div>
            <div className="select-container">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;