export default class Staff {
    staffID: string
    name: string
    gender: string
    email: string
    role: string
    address: string
    joinedDate: string
    dob: string
    designation: string
    phone: number
    img: string | null
    status: string

    constructor(staffID: string, name: string, gender: string, email: string, role: string, address: string, joinedDate: string, dob: string, designation: string, phone: number, img: string | null, status: string) {
        this.staffID = staffID
        this.name = name
        this.gender = gender
        this.email = email
        this.role = role
        this.address = address
        this.joinedDate = joinedDate
        this.dob = dob
        this.designation = designation
        this.phone = phone
        this.img = img
        this.status = status
    }
}