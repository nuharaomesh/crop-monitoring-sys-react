export class FieldAssignment {
    staffID: string
    fieldCode: string
    date: string
    availableStat: string

    constructor(staffID: string, fieldCode: string, date: string, availableStat: string) {
        this.staffID = staffID
        this.fieldCode = fieldCode
        this.date = date
        this.availableStat = availableStat
    }
}