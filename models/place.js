export class Place{
    constructor(title, imageUri, location){
        this.title = title,
        this.imageUri = imageUri,
        this.address = location.address,
        this.location = {lat: location.lat, lng: location.lng}, // {lat: x, lng: y}
        this.id = new  Date().toString()

    }
}