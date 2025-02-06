export default class Staff {
    staffID: string
    firstname: string
    lastname: string
    gender: string
    email: string
    role: string
    address: string
    joinedDate: string
    dob: string
    designation: string
    phone: string
    staffImg: string | null
    status: string
    count: number

    constructor(staffID: string, firstname: string, lastname: string, gender: string, email: string, role: string, address: string, joinedDate: string, dob: string, designation: string, phone: string, staffImg: string | null, status: string, count: number) {
        this.staffID = staffID
        this.firstname = firstname
        this.lastname = lastname
        this.gender = gender
        this.email = email
        this.role = role
        this.address = address
        this.joinedDate = joinedDate
        this.dob = dob
        this.designation = designation
        this.phone = phone
        this.staffImg = staffImg
        this.status = status
        this.count = count
    }
}