function TodoItem(props) {
    return (
        <li className="todo-item nav-item">
            <input type="checkbox" className="todo-completer" />
            <p className="todo-description">{props.description}</p>
            <ul className="todo-category"></ul>
            <input type="checkbox" className="todo-deleter" />
        </li>
    );
}

export default TodoItem;