export class Equipment {
    equipmentID: string
    staffID: string
    name: string
    type: string
    availableStat: string

    constructor(equipmentID: string, staffID: string, name: string, type: string, availableStat: string) {
        this.equipmentID = equipmentID
        this.staffID = staffID
        this.name = name
        this.type = type
        this.availableStat = availableStat
    }
}