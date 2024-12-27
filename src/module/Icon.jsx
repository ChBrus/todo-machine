import { BsAirplaneFill, BsInboxFill } from "react-icons/bs"

class IconFactory {
    static id = 1

    constructor(
        Icon = <BsInboxFill />
    ) {
        this.id = IconFactory.id
        IconFactory.id++

        this.Icon = Icon
    }

    static getIcon(id) {
        return Object.values(Icon).find(i => i.id === id).Icon
    }
}

const Icon = {
    Inbox: new IconFactory(),
    Airplane: new IconFactory(<BsAirplaneFill />)
}

export { Icon, IconFactory }