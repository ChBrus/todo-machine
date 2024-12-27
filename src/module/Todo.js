// import { format, parse } from "@formkit/tempo"

class Todo {
    /**
     * 
     * @param {string} title Título del ToDo
     * @param {ListFactory} list Lista a la que pertenece el ToDo
     */
    constructor({
        title = '',
        lists = null,
        deadlineDate = null,
        createdDate = (new Date()).getTime(),
        completed = false
    }) {
        this.title = title
        this.lists = []
        if (lists) this.lists = lists

        this.deadlineDate = deadlineDate
        this.createdDate = createdDate
        this.completed = completed
    }
}

export default Todo;