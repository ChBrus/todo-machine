import { ListFactory, Lists } from "./List"
import { format, parse } from "@formkit/tempo"

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
        this.lists = [Lists.Inbox]
        this.lists.push(list)
        this.deadlineDate = null
        this.createdDate = new Date()
        this.createdDate = this.createdDate.getTime()
        this.completed = false
    }

    showList() {
        return this.lists.filter(list => list !== Lists.Inbox)
    }
}

export default Todo;