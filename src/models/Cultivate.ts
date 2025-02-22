export class Cultivate {
    cropCode: string
    fieldCode: string
    staffs: string[]

    constructor(cropCode: string, fieldCode: string, staffs: string[]) {
        this.cropCode =cropCode
        this.fieldCode = fieldCode
        this.staffs = staffs
    }
}