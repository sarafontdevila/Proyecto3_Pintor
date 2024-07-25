import './style.css'
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

document.getElementById('searchButton').addEventListener('click', fetchPhotos)

async function fetchPhotos() {
  const query = document.getElementById('searchInput').value
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=30`

  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data.results.length === 0) {
      await fetchDefaultPhotos()
    } else {
      displayPhotos(data.results)
    }
  } catch (error) {
    console.error('Error fetching photos:', error)
  }
}

async function fetchDefaultPhotos() {
  const defaultQuery = 'house'
  const defaultUrl = `https://api.unsplash.com/search/photos?query=${defaultQuery}&client_id=${ACCESS_KEY}&per_page=30`

  try {
    const response = await fetch(defaultUrl)
    const data = await response.json()
    displayPhotos(data.results)
  } catch (error) {
    console.error('Error fetching default photos:', error)
  }
}
function displayPhotos(photos) {
  const photoContainer = document.getElementById('imageResults')
  photoContainer.innerHTML = ''

  photos.forEach((photo) => {
    const img = document.createElement('img')
    img.src = photo.urls.small
    img.className = 'photo'
    img.style.width = 'auto'
    img.style.height = 'auto'
    img.style.maxWidth = '100%'
    img.style.maxHeight = '100%'
    img.style.objectFit = 'contain'

    const container = document.createElement('div')
    container.className = 'photo-container'
    container.appendChild(img)

    photoContainer.appendChild(container)
  })
}
fetchDefaultPhotos()
