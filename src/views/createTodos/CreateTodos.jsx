import { BsCircle, BsTrashFill } from "react-icons/bs";

function CreateTodos() {
    return (
        <section className="todo-creater px-3 py-3 bg-green-700">
            <div className="content bg-fourth">
                <textarea className="todo-input" style={{
                    gridArea: 'text-area'
                }}></textarea>
                <BsCircle className="ri w-100 mt-1" style={{
                    gridArea: 'check-icon'
                }} />
                <BsTrashFill className="ri w-100 mt-1" style={{
                    gridArea: 'trash-icon'
                }}/>
            </div>
        </section>
    );
}

export default CreateTodos;