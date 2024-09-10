import { Icon } from "./module/Icon";

function CreateTodos({
    
}) {
    return (
        <section className="todo-creater px-3 py-3 bg-green-700">
            <div className="content bg-fourth">
                <textarea className="todo-input" style={{
                    gridArea: 'text-area'
                }}></textarea>
                <i className={Icon.Circle.getClass()} style={{
                    gridArea: 'check-icon'
                }}></i>
                <i className={Icon.Trash.getClass()} style={{
                    gridArea: 'trash-icon'
                }}></i>
            </div>
        </section>
    );
}

export default CreateTodos;