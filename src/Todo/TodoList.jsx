import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import Toggle from "./module/Toggle";

function TodoList({
    todosToggle = new Toggle(),
    listsToggle = new Toggle()
}) {
    const todosTemp = todosToggle.objectsList

    const todosInfo = {
        completed: todosTemp.filter(todo => todo.completed).length,
        total: todosTemp.length
    }

    const completedTodosRequired = todosInfo.completed === 0 ? 'd-none' : ''

    return (
        <main className="todo-list py-2 px-4 mb-6">
            <TodoCounter
                listHeader={'Inbox'}
                todosInfo={todosInfo}
            />
            <section>
                <ul className="navbar-nav gap-3">
                    {todosTemp.filter(todo => !todo.completed).map((todo, todoIdx) => {
                        return (
                            <TodoItem
                                key={'to-complete' + todoIdx}
                                todo={todo}
                                todosToggle={todosToggle}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        )
                    })}
                </ul>
            </section>
            <section className={completedTodosRequired}>
                <h6>Completados</h6>
                <ul className="navbar-nav gap-3">
                    {todosTemp.filter(todo => todo.completed).map((todo, todoIdx) => {
                        return (
                            <TodoItem
                                key={'to-complete' + todoIdx}
                                todo={todo}
                                todosToggle={todosToggle}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    );
}

export default TodoList;