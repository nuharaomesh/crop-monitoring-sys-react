export default class Crop {
    cropCode: string
    cropName: string
    cropScientificName: string
    category: string
    cropSeason: string
    cropGrowthTime: string
    price: number
    img: string | null | object

    constructor(cropCode: string, cropName: string, cropScientificName: string, category: string, cropSeason: string, cropGrowthTime: string, price: number, img: string | null | object) {
        this.cropCode = cropCode
        this.cropName = cropName
        this.cropScientificName = cropScientificName
        this.category = category
        this.cropSeason = cropSeason
        this.cropGrowthTime = cropGrowthTime
        this.price = price
        this.img = img
    }
}