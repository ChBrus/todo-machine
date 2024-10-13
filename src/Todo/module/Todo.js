// import { format, parse } from "@formkit/tempo"

class Todo {
    /**
     * 
     * @param {string} title Título del ToDo
     * @param {ListFactory} list Lista a la que pertenece el ToDo
     */
    constructor(
        title,
        list = null
    ) {
        this.title = title
        this.lists = []
        if (list) this.lists.push(list)

        this.deadlineDate = null
        this.createdDate = new Date()
        this.createdDate = this.createdDate.getTime()
        this.completed = false
    }
}

export default Todo;