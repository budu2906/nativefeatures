const API_KEY = 'AIzaSyDmOAobCh0ZtdaXGAPxSqcYgUtmZj4boa0'

export const getMapPreview = (lat, lng) =>{ 

    const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`

    return imagePreviewURL

}





export const getAddress = async (lat, lng) =>{
   const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)

   if(!response.ok) throw new Error('Failed to fetch')
   const data = await response.json()
   const address =data.results[0].formated_address
   return address
}