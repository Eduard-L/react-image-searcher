
class Api {
    constructor({ baseUrl, apiKey }) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    search(query) {
        return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`
            }
        })
            .then(res => res.json());
    }
}

const api = new Api({
    baseUrl: 'https://api.unsplash.com/',
    apiKey: 'e58e3582c206680c1a9401c750a2bd8293920f8e7cc301b614c14cb5f58c1bc1'
});

export default api;
