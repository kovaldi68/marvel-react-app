import { Component } from 'react';
import { transformCharacter, transformComic } from './utils';

const { REACT_APP_MY_API_KEY } = process.env;
const { REACT_APP_MARVEL_URL } = process.env;

class Marvel extends Component{
    _baseOffset = 250;

    getData = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't get to ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters(offset = this._baseOffset) {
        const res = await this.getData(`${REACT_APP_MARVEL_URL}characters?limit=10&offset=${offset}&${REACT_APP_MY_API_KEY}`);
        return res.data.results.map(transformCharacter);
    }

    async getAllComics(offset = this._baseOffset) {
        const res = await this.getData(`${REACT_APP_MARVEL_URL}comics?limit=10&offset=${offset}&${REACT_APP_MY_API_KEY}`);
        return res.data.results.map(transformComic);
    }
    
    async getCharacter(id) {
        const res = await this.getData(`${REACT_APP_MARVEL_URL}characters/${id}?${REACT_APP_MY_API_KEY}`);
        return transformCharacter(res.data.results[0]);
    }

    async getComic(id) {
        const res = await this.getData(`${REACT_APP_MARVEL_URL}comics/${id}?${REACT_APP_MY_API_KEY}`);
        return transformComic(res.data.results[0]);
    }
}

export default Marvel;