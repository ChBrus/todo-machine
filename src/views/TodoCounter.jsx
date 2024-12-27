function TodoCounter({
    listHeader,
    todosInfo
}) {
    return (
        <section className="todo-counter">
            <h3>{listHeader}</h3>
            <div className="counter bg-fourth">
                <span>{todosInfo.completed}</span>
                <span>/</span>
                <span>{todosInfo.total}</span>
            </div>
        </section>
    );
}

export default TodoCounter;