const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

//API
const count = 10
const apiKey = 'mp4gN_gTGNPr9n8Lty4Tm9RXyug0lsC66Kbm1-X-9eo'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// create elements for links & photos, add to dom
function displayPhotos() {
    //run function for each object in photosArray
    photosArray.forEach((photo) => {
        // create anchor to link to api
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', '_blank')
    })
}

// get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch (error) {

    }
}

// on load
getPhotos()