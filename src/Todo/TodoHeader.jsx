import { ListFactory } from "./module/List"
import Toggle from "./module/Toggle";

function TodoHeader({
    listsToggle = new Toggle()
}) {
    return (
        <header className="todo-header position-fixed top-0 start-0 bg-primary text-light">
            <h1>ToDo Machine</h1>
            <hr className="my-2" />
            <nav className="navbar">
                <ul className="nav w-100 gap-2">
                    {
                        listsToggle.objectsList.map((lista, listaIdx) => (
                            <TodoListButtons
                                key={listaIdx}
                                lista={lista}
                                listsToggle={listsToggle}
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
 * @param {Toggle} lista 
 * @returns 
 */
function TodoListButtons({
    lista = ListFactory,
    listsToggle = new Toggle()
}) {
    const changeCurrentList = () => {
        listsToggle.setObject(lista.choose(listsToggle.objectsList))
    }

    return (
        <li
            className="nav-item w-100"
            onClick={changeCurrentList}
        >
            <button className="btn w-100 btn-third d-flex justify-content align-items gap-2">
                {lista.icon}
                <span className="description">{lista.title}</span>
            </button>
        </li>
    )
}

export default TodoHeader;