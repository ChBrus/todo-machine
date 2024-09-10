class Toggle {
    constructor(
        objectsList = [],
        setObject = () => null
    ) {
        this.objectsList = objectsList
        this.setObject = setObject
    }

    /**
     * @param {*} object El objeto usado para añadirlo a la lista guardada al momento
     */
    addToggle(object) {
        const objectsTemp = this.objectsList
        objectsTemp.push(object)

        console.log(this.setObject)
        this.setObject(objectsTemp)
    }

    /**
     * @param {*} objectToUpdate Objeto a actualizar
     * @param {*} newobject El objeto con sus valores ya actualizados
     */
    updateToggle(objectToUpdate, newobject) {
        const objectsTemp = this.objectsList
        
        this.setObject(objectsTemp.map(object => {
            if (object === objectToUpdate) return newobject
            else return object
        }))
    }

    /**
     * @param {*} objectToDelete El objeto a eliminar en la lista
     */
    deleteToggle(objectToDelete) {
        let objectsTemp = this.objectsList.map(object => {
            if (object === objectToDelete) return null
            else return object
        })

        objectsTemp = objectsTemp.sort(object1 => {
            if (object1 === null) return -1
            else return 0
        }).reverse()

        objectsTemp.pop()

        this.setObject(objectsTemp.reverse())
    }
}

export default Toggle;