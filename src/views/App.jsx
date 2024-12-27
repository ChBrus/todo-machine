import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Todo.css';
import TodoHeader from "./TodoHeader";
import TodoList from "./items/TodoList";
import Todo from "../module/Todo";
import { ListFactory } from "../module/List";
import Toggle from "../module/Toggle";
import CreateTodos from "./createTodos/CreateTodos";
import { Icon } from "../module/Icon";

const tempTodoListApp = [
    new ListFactory({
        title: 'Inbox',
        iconId: Icon.Inbox.id,
        isChoosen: true
    }),
    new ListFactory({
        title: 'Travel',
        iconId: Icon.Airplane.id
    })
]

// const tempTodoApp = [
//     new Todo({
//         title: 'Estudiar para el EXANI-II en curso.unibetas.com'
//     }),
//     new Todo({
//         title: 'Terminarme este rico cereal'
//     }),
//     new Todo({
//         title: 'Sacar el bote del refrigerador para tomar agua bien helada'
//     }),
//     new Todo({
//         title: 'No dormirse tan tarde JAKSJWQKAL'
//     }),
//     new Todo({
//         title: 'Test'
//     })
// ]

// tempTodoApp[3].lists.push(tempTodoListApp[1])
// tempTodoApp[4].lists.push(tempTodoListApp[1])

// localStorage.setItem('TODOS', JSON.stringify(tempTodoApp.map(todoTemp => ({
//     title: todoTemp.title,
//     lists: todoTemp.lists.map(list => ({
//         title: list.title,
//         iconId: list.iconId,
//         color: list.color,
//         isChoosen: list.isChoosen
//     })),
//     deadlineDate: todoTemp.deadlineDate,
//     createdDate: todoTemp.createdDate,
//     completed: todoTemp.completed
// }))))

function App() {
    let todosTemp = localStorage.getItem('TODOS')

    if (!todosTemp) {
        todosTemp = []
    } else {
        todosTemp = JSON.parse(todosTemp).map((todo) => {
            const todoParsed = todo
            todoParsed.lists = todoParsed.lists.map(list => new ListFactory(list))
    
            return (new Todo(todoParsed))
        })
    }

    const [todos, setTodos] = React.useState(todosTemp);
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