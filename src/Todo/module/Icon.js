class IconFactory {
    /**
     * 
     * @param {string} iconName 
     */
    constructor(
        iconName,
        isFill = false
    ) {
        this.iconName = iconName.charAt(0).toUpperCase() + iconName.slice(1).split('-').join(' ').toLowerCase()
        this.iconClass = ['bi']
        this.iconClass.push(`bi-${iconName}`)
        this.isFill = isFill
    }

    getClass() {
        return this.isFill ? this.getFill() : this.getAverageClass()
    }

    getAverageClass() {
        return this.iconClass.join(' ')
    }

    getFill() {
        return this.getAverageClass() + '-fill'
    }

    changeFill() {
        this.isFill = !this.isFill
    }
}

const Icon = {
    Inbox: new IconFactory('inbox', true),
    Airplane: new IconFactory('airplane', true),
    AirPlaneEngins: new IconFactory('airplane-engins'),
    Alarm: new IconFactory('alarm', true),
    CheckSquare: new IconFactory('check-square', true),
    CheckCircle: new IconFactory('check-circle', true),
    Circle: new IconFactory('circle'),
    Trash: new IconFactory('trash')
}

export { Icon, IconFactory }