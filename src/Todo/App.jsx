import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Todo.css';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {


    return (
        <>
            <TodoHeader />
            <TodoList />
        </>
    );
}

export default App;