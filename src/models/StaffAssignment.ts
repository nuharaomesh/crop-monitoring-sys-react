export class StaffAssignment {
    vehicleID: string
    staffID: string
    role: string
    status: string
    assignmentDate: string

    constructor(vehicleID: string, staffID: string, role: string, status: string, assignmentDate: string) {
        this.vehicleID = vehicleID
        this.staffID = staffID
        this.role = role
        this.status = status
        this.assignmentDate = assignmentDate
    }
}