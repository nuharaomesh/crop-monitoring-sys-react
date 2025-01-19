export class Cultivate {
    cultivateID: string
    cropCode: string
    filedCode: string
    staffs: string[]

    constructor(cultivateID: string, cropCode: string, filedCode: string, staffs: string[]) {
        this.cultivateID = cultivateID
        this.cropCode =cropCode
        this.filedCode = filedCode
        this.staffs = staffs
    }
}