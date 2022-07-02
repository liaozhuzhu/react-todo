const Form = () => {
    const inputHandler = (e) => {
        console.log(e.target.value);
    }
    return (
        <form className="todo-form">
            <div className="input-container">
                <input onChange={inputHandler} type="text" className="todo-input" />
                <button className="todo-button" type="submit">+</button>
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