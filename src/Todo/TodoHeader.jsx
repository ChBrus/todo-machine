function TodoHeader() {
    return (
        <header className="todo-header position-fixed top-0 start-0 bg-primary">
            <h1>ToDo Machine</h1>
            <hr className="my-2" />
            <nav className="navbar bg-body-primary">
                <ul className="nav">
                    <li className="nav-item">
                        <button className="btn btn-third d-flex justify-content align-items gap-2">
                            <i class="bi bi-inbox-fill"></i>
                            <span className="description">Inbox</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default TodoHeader;