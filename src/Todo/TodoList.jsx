import TodoItem from "./TodoItem";

function TodoList() {
    return (
        <main className="todo-list py-2 px-4">
            <h3>Inbox</h3>
            <ul className="navbar-nav">
                <TodoItem description='Estudiar para el EXANI-II en curso.unibetas.com' />
                <TodoItem description='Comer más de 1 pizza' />
                <TodoItem description='Sacar el bote del refrigerador para tomar agua bien helada' />
            </ul>
        </main>
    );
}

export default TodoList;