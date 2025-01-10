export class Vehicle {
    vehicleID: string
    licencePlate: string
    category: string
    fuelType: string
    remarks: string
    status: string

    constructor(vehicleID: string, licencePlate: string, category: string, fuelType: string, remarks: string, status: string) {
        this.vehicleID = vehicleID
        this.licencePlate = licencePlate
        this.category = category
        this.fuelType = fuelType
        this.remarks = remarks
        this.status = status
    }
}