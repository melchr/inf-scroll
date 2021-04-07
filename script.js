const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

//API
const count = 10
const apiKey = 'mp4gN_gTGNPr9n8Lty4Tm9RXyug0lsC66Kbm1-X-9eo'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    } catch (error) {

    }
}

// on load
getPhotos()