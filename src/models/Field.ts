export class Field {
    fieldCode: string
    fieldName: string
    fieldLocation: string
    fieldSize: string
    fieldImg: string | null

    constructor(fieldCode: string, fieldName: string, fieldLocation: string, fieldSize: string, fieldImg: string | null) {
        this.fieldCode = fieldCode
        this.fieldName = fieldName
        this.fieldLocation = fieldLocation
        this.fieldSize = fieldSize
        this.fieldImg = fieldImg
    }
}