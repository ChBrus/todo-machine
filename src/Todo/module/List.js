import { Icon, IconFactory } from "./Icon"

class ListFactory {
    /**
     * 
     * @param {string} title Título de la lista
     * @param {IconFactory} icon Tipo de ícono
     */
    constructor(title, icon) {
        this.title = title
        this.color = '#000'
        this.icon = icon
        this.isChoosen = false
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

    // Función para validar el color en formato HEX
    isValidHex(color) {
        // Expresión regular para color HEX (# seguido de 3 o 6 caracteres 0-9, a-f, o A-F)
        const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
        return hexRegex.test(color);
    }
}

const Lists = {
    Inbox: new ListFactory('Inbox', Icon.Inbox)
}

export { ListFactory, Lists };