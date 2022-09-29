const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const API_KEY = 'AIzaSyCPl-YNRnmdtNPjSPkxvTyynS8b8HTAP3o'

export const getVideos = () => {
    return fetch(`${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`)
        .then(res => res.json())
}