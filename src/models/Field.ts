export class Field {
    fieldCode: string
    fieldName: string
    fieldAddress: string
    fieldLocation: string
    fieldSize: string
    fieldImg: string | null
    isCultivated: boolean

    constructor(fieldCode: string, fieldName: string, fieldAddress: string, fieldLocation: string, fieldSize: string, fieldImg: string | null, isCultivated: boolean) {
        this.fieldCode = fieldCode
        this.fieldName = fieldName
        this.fieldAddress = fieldAddress
        this.fieldLocation = fieldLocation
        this.fieldSize = fieldSize
        this.fieldImg = fieldImg
        this.isCultivated = isCultivated
    }
}