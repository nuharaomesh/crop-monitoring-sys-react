export default class Field {
    fieldCode: string
    fieldName: string
    fieldAddress: string
    fieldLocation: string
    fieldSize: string
    img: string | null
    fieldNowCultivated!: boolean

    constructor(fieldCode: string, fieldName: string, fieldAddress: string, fieldLocation: string, fieldSize: string, img: string | null, fieldNowCultivated: boolean) {
        this.fieldCode = fieldCode
        this.fieldName = fieldName
        this.fieldAddress = fieldAddress
        this.fieldLocation = fieldLocation
        this.fieldSize = fieldSize
        this.img = img
        this.fieldNowCultivated = fieldNowCultivated
    }
}