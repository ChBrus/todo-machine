import { Icon } from "./module/Icon"
import Todo from "./module/Todo";
import Toggle from "./module/Toggle";

function TodoItem({
    todo = new Todo(''),
    todosToggle = Toggle(),
    title,
    completed
}) {
    const completerClass = 'todo-completer'
    const icon = (completed ? Icon.CheckCircle.getClass() + ' text-green-700' : Icon.Circle.getClass())

    return (
        <li className="todo-item nav-item bg-third text-primary">
            <span className={completerClass} role="checkbox"
                onClick={() => {
                    const todoTemp = todo
                    todoTemp.completed = !todoTemp.completed

                    todosToggle.updateToggle(todo, todoTemp)
                }}
            >
                <i className={icon}></i>
            </span>
            <p className="todo-description">{title}</p>
            <span className="btn btn-danger d-flex justify-content-center align-items-center" role="checkbox"
                onClick={() => {
                    const todoTemp = todo
                    todoTemp.completed = !todoTemp.completed

                    todosToggle.deleteToggle(todo)
                }}
            >
                <i className={Icon.Trash.getClass()}></i>
            </span>
            <ul className="todo-category">
                
            </ul>
        </li>
    );
}

export default TodoItem;