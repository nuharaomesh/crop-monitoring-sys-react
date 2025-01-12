export class Crop {
    cropCode: string
    cropName: string
    cropScientificName: string
    category: string
    cropSeason: string
    cropGrowthTime: string
    cropImg: string | null

    constructor(cropCode: string, cropName: string, cropScientificName: string, category: string, cropSeason: string, cropGrowthTime: string, cropImg: string | null ) {
        this.cropCode = cropCode
        this.cropName = cropName
        this.cropScientificName = cropScientificName
        this.category = category
        this.cropSeason = cropSeason
        this.cropGrowthTime = cropGrowthTime
        this.cropImg = cropImg
    }
}