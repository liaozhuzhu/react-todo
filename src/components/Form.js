import { v4 as uuidv4 } from 'uuid';

const Form = ({text, setText, todos, setTodos}) => {

    const inputHandler = (e) => {
        setText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: text, completed: false, id: uuidv4()}
        ])

    }

    return (
        <form className="todo-form">
            <div className="input-container">
                <input onChange={inputHandler} type="text" className="todo-input" />
                <button onClick={submitHandler} className="todo-button" type="submit">+</button>
            </div>
            <div className="select-container">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;