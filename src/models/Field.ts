export class Field {
    fieldCode: string
    fieldName: string
    fieldLocation: string
    fieldSize: string
    fieldImg1: string
    fieldImg2: string

    constructor(fieldCode: string, fieldName: string, fieldLocation: string, fieldSize: string, fieldImg1: string, fieldImg2: string) {
        this.fieldCode = fieldCode
        this.fieldName = fieldName
        this.fieldLocation = fieldLocation
        this.fieldSize = fieldSize
        this.fieldImg1 = fieldImg1
        this.fieldImg2 = fieldImg2
    }
}