export class Logs {
    logCode: string
    date: string
    details: string
    observedImg: string

    constructor(logCode: string, date: string, details: string, observedImg: string) {
        this.logCode = logCode
        this.date = date
        this.details = details
        this.observedImg = observedImg
    }
}