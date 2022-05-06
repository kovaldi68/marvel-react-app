import { Component } from 'react';
import { transformCharacter, transformComic } from './utils';

const { REACT_APP_MY_API_KEY } = process.env;
const { REACT_APP_MARVEL_URL } = process.env;

class Marvel extends Component{
    _baseOffset = 210;
    _limitOnItemsLoading = 10;
    _totalCharacters = 0;

    getData = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't get to ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters(offset = this._baseOffset) {
        const res = await this.getData(`${REACT_APP_MARVEL_URL}characters?limit=${this._limitOnItemsLoading}&offset=${offset}&${REACT_APP_MY_API_KEY}`);
        this._totalCharacters = await res.data.total;
        return res.data.results.map(transformCharacter);
    }

    async getCharactersbyName(query) {
        const res = await this.getData(`${REACT_APP_MARVEL_URL}characters?nameStartsWith=${query}&${REACT_APP_MY_API_KEY}`);
        return res.data.results.map(transformCharacter);
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