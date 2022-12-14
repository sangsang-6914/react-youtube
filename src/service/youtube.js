import axios from 'axios'

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient
  }

  async mostPopular() {
    const response = await this.youtube.get('/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25
      }
    })

    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('/search', {
      params: {
        part: 'snippet',
        q: query,
        maxResults: 25,
        type: 'video'
      }
    }).then(res => res.data.items.map(item => ({...item, id: item.id.videoId})))

    return response
  }
}

export default Youtube;
