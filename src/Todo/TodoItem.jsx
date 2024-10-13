import { BsCheckCircleFill, BsCircle, BsTrashFill } from "react-icons/bs";
import Todo from "./module/Todo";
import Toggle from "./module/Toggle";

function TodoItem({
    todo = new Todo(''),
    todosToggle = Toggle(),
    title,
    completed
}) {
    return (
        <li className="todo-item nav-item bg-third text-primary">
            <span className='todo-completer' role="checkbox" aria-checked="false"
                onClick={() => {
                    const todoTemp = todo
                    todoTemp.completed = !todoTemp.completed

                    todosToggle.updateToggle(todo, todoTemp)
                }}
            >
                {
                    completed ?
                    <BsCheckCircleFill className="ri text-green-700" /> :
                    <BsCircle className="ri" />
                }
            </span>
            <p className="todo-description">{title}</p>
            <span className="btn btn-red d-flex justify-content-center align-items-center p-0" role="checkbox" aria-checked="false"
                onClick={() => {
                    todosToggle.deleteToggle(todo)
                }}
            >

                <BsTrashFill className="ri text-light" />
            </span>
            <ul className="todo-category">
                {todo.lists.map((list) => {
                    return (
                        <TodoCategory
                            key={list.id}
                            list={list}
                        />
                    );
                })}
            </ul>
        </li>
    );
}

function TodoCategory({
    list
}) {
    return (
        <>
            <li className={`btn btn-${list.color}`}>
                {list.title}
            </li>
        </>
    );
}

export default TodoItem;