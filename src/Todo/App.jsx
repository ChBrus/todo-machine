import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Todo.css';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import Todo from "./module/Todo";
import { ListFactory } from "./module/List";
import Toggle from "./module/Toggle";
import CreateTodos from "./CreateTodos";
import { BsAirplaneFill, BsInboxFill } from "react-icons/bs";

const tempTodoApp = [
    new Todo('Estudiar para el EXANI-II en curso.unibetas.com'),
    new Todo('Terminarme este rico cereal'),
    new Todo('Sacar el bote del refrigerador para tomar agua bien helada'),
    new Todo('No dormirse tan tarde JAKSJWQKAL'),
    new Todo('Test')
],
tempTodoListApp = [
    new ListFactory('Inbox', <BsInboxFill className="ri" />, true),
    new ListFactory('Travel', <BsAirplaneFill className="ri" />)
]

// List tests
tempTodoApp[3].lists.push(tempTodoListApp[1])
tempTodoApp[4].lists.push(tempTodoListApp[1])

function App() {
    const [todos, setTodos] = React.useState(tempTodoApp);

    const todosToggle = new Toggle(todos, setTodos)

    const [todoLists, setTodoLists] = React.useState(tempTodoListApp)

    const listsToggle = new Toggle(todoLists, setTodoLists)

    return (
        <>
            <TodoHeader
                listsToggle={listsToggle}
            />
            <TodoList
                todosToggle={todosToggle}
                listsToggle={listsToggle}
            />
            <CreateTodos />
        </>
    );
}

export { App };