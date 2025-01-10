export class Cultivate {
    cultivateID: string
    cropCode: string
    filedCode: string
    status: string
    growthStage: string

    constructor(cultivateID: string, cropCode: string, filedCode: string, status: string, growthStage: string) {
        this.cultivateID = cultivateID
        this.cropCode =cropCode
        this.filedCode = filedCode
        this.status = status
        this.growthStage = growthStage
    }
}