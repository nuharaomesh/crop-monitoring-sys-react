export class Equipment {
    equipmentID: string
    staffID: string
    name: string
    type: string
    availableStat: string
    count: number

    constructor(equipmentID: string, staffID: string, name: string, type: string, availableStat: string, count: number) {
        this.equipmentID = equipmentID
        this.staffID = staffID
        this.name = name
        this.type = type
        this.availableStat = availableStat
        this.count = count
    }
}