export class Staff {
    staffID: string
    firstname: string
    lastname: string
    email: string
    role: string
    address: string
    joinedDate: string
    dob: string
    designation: string
    phone: string

    constructor(staffID: string, firstname: string, lastname: string, email: string, role: string, address: string, joinedDate: string, dob: string, designation: string, phone: string) {
        this.staffID = staffID
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.role = role
        this.address = address
        this.joinedDate = joinedDate
        this.dob = dob
        this.designation = designation
        this.phone = phone
    }
}