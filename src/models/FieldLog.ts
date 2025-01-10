export class FieldLog {
    logCode: string
    fieldCode: string
    date: string
    observationDetails: string

    constructor(logCode: string, fieldCode: string, date: string, observationDetails: string) {
        this.logCode = logCode
        this.fieldCode = fieldCode
        this.date = date
        this.observationDetails = observationDetails
    }
}