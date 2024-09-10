import { Lists, ListFactory } from "./module/List"

function TodoHeader() {
    const list = Object.values(Lists)

    return (
        <header className="todo-header position-fixed top-0 start-0 bg-primary text-light">
            <h1>ToDo Machine</h1>
            <hr className="my-2" />
            <nav className="navbar">
                <ul className="nav w-100 gap-2">
                    {
                        list.map((lista, listaIdx) => (
                            <TodoListButtons
                                key={listaIdx}
                                lista={lista}
                            />
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

/**
 * 
 * @param {ListFactory} lista 
 * @returns 
 */
function TodoListButtons({
    lista
}) {
    return (
        <li className="nav-item w-100">
            <button className="btn w-100 btn-third d-flex justify-content align-items gap-2">
                <i className={lista.icon.getClass()}></i>
                <span className="description">{lista.title}</span>
            </button>
        </li>
    )
}

export default TodoHeader;