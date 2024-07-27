/*const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY
export async function fetchPhotos() {
  const query = document.getElementById('searchInput').value
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=30`

  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data.results.length === 0) {
      await fetchDefaultPhotos()
      displayMessage('No results found. Showing default photos')
    } else {
      displayPhotos(data.results)
      initialPhotos = data.results
    }
    document.getElementById('searchInput').value = ''
  } catch (error) {
    console.error('Error fetching photos:', error)
  }
}*/
