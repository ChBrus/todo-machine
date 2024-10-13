class ListFactory {
    static id = 1

    /**
     * 
     * @param {string} title Título de la lista
     * @param {*} icon Tipo de ícono
     */
    constructor(title, icon, isChoosen = false) {
        this.id = ListFactory.id
        ListFactory.id++

        this.title = title
        this.color = 'black'
        this.icon = icon
        this.isChoosen = isChoosen
    }

    setId(id) {
        this.id = id
        return this
    }

    setColor(color) {
        if (this.isValidHex(color)) this.color = color
    }

    choose(lastLists = []) {
        const listsTemp = lastLists.map(list => {
            if (list === this) {
                list.isChoosen = true
                return list
            } else {
                list.isChoosen = false
                return list
            }
        })

        return listsTemp
    }

    /**
     * 
     * @param {[]} lastLists 
     * @returns {ListFactory}
     */
    static getCurrentlyList(lastLists = []) {
        return lastLists.filter(list => list.isChoosen)[0]
    }

    // Función para validar el color en formato HEX
    isValidHex(color) {
        // Expresión regular para color HEX (# seguido de 3 o 6 caracteres 0-9, a-f, o A-F)
        const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
        return hexRegex.test(color);
    }
}

export { ListFactory };