import { Component } from 'react';
import { transformCharacter, transformComic } from './utils';

const { REACT_APP_MY_API_KEY } = process.env;

class Marvel extends Component{
    _mainUrl = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = REACT_APP_MY_API_KEY;

    getData = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't get to ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getData(`${this._mainUrl}characters?limit=10&offset=190&${this._apiKey}`);
        return res.data.results.map(transformCharacter);
    }

    async getAllComics() {
        const res = await this.getData(`${this._mainUrl}comics?limit=10&offset=300&${this._apiKey}`);
        return res.data.results.map(transformComic);
    }
    
    async getCharacter(id) {
        const res = await this.getData(`${this._mainUrl}characters/${id}?${this._apiKey}`);
        return await transformCharacter(res.data.results[0]);
    }

    async getComic(id) {
        const res = await this.getData(`${this._mainUrl}comics/${id}?${this._apiKey}`);
        return await transformComic(res.data.results[0]);
    }
}

export default Marvel;