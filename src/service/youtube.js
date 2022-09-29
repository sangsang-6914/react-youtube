class Youtube {
  key = '';
  #BASE_URL = 'https://www.googleapis.com/youtube/v3';
  constructor(key) {
    this.key = key;
  }

  getRequestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  async mostPopular() {
    return await fetch(
      `${
        this.#BASE_URL
      }/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((result) => result.items);
  }

  async search(query) {
    return await fetch(
      `${
        this.#BASE_URL
      }/search?part=snippet&maxResults=25&q=${query}&type=video&key=${
        this.key
      }`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
