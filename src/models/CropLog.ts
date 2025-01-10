export class CropLog {
    cropCode: string
    logCode: string
    date: string
    condition: string
    note: string

    constructor(cropCode: string, logCode: string, date: string, condition: string, note: string) {
        this.cropCode = cropCode
        this.logCode = logCode
        this.date = date
        this.condition = condition
        this.note = note
    }
}