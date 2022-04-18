class Marvel {
    _mainUrl = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=1ad1d38a11b0514c4b4113b83a4e0bf6';

    getData = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't get to ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getData(`${this._mainUrl}characters?limit=10&offset=190&${this._apiKey}`);
        return await res.data.results.map(this._transformCharacter);
    }
    
    getCharacter = async (id) => {
        const res = await this.getData(`${this._mainUrl}characters/${id}?${this._apiKey}`);
        return await this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (character) => {
        return {
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
        }
    }
}

export default Marvel;