import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Todo.css';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import Todo from "./module/Todo";
import { ListFactory } from "./module/List";
import { Icon } from "./module/Icon";
import Toggle from "./module/Toggle";

function App() {
    const [todos, setTodos] = React.useState([
        new Todo('Estudiar para el EXANI-II en curso.unibetas.com'),
        new Todo('Terminarme este rico cereal'),
        new Todo('Sacar el bote del refrigerador para tomar agua bien helada'),
        new Todo('No dormirse tan tarde JAKSJWQKAL')
    ]);

    const todosToggle = new Toggle(todos, setTodos)

    const [todoLists, setTodoLists] = React.useState([
        new ListFactory('Inbox', Icon.Inbox)
    ])

    const listsToggle = new Toggle(todoLists, setTodoLists)

    return (
        <>
            <TodoHeader />
            <TodoList
                todosToggle={todosToggle}
                listsToggle={listsToggle}
            />
        </>
    );
}

export { App };