export class StaffLog {
    logCode: string
    staffID: string
    date: string
    observationRole: string

    constructor(logCode: string, staffID: string, date: string, observationRole: string) {
        this.logCode = logCode
        this.staffID = staffID
        this.date = date
        this.observationRole = observationRole
    }
}