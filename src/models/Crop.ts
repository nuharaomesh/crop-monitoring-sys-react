export class Crop {
    cropCode: string
    cropName: string
    cropScientificName: string
    category: string
    cropSeason: string
    cropImg: string

    constructor(cropCode: string, cropName: string, cropScientificName: string, category: string, cropSeason: string, cropImg: string ) {
        this.cropCode = cropCode
        this.cropName = cropName
        this.cropScientificName = cropScientificName
        this.category = category
        this.cropSeason = cropSeason
        this.cropImg = cropImg
    }
}