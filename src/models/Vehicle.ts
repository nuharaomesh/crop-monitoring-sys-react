export default class Vehicle {
    vehicleID: string
    licensePlate: string
    category: string
    fuelType: string
    remarks: string
    status: string

    constructor(vehicleID: string, licensePlate: string, category: string, fuelType: string, remarks: string, status: string) {
        this.vehicleID = vehicleID
        this.licensePlate = licensePlate
        this.category = category
        this.fuelType = fuelType
        this.remarks = remarks
        this.status = status
    }
}