import { Icon } from "./module/Icon";

function CreateTodos({
    
}) {
    return (
        <div className="todo-creater">
            <i className={Icon.Circle.getClass()}></i>
            <textarea className="todo-input"></textarea>
            <i className={Icon.Trash.getClass()}></i>
        </div>
    );
}

export default CreateTodos;