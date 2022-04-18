import './characterList.scss';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import CharacterCard from '../characterCard/CharacterCard';
import { Component } from 'react';

import Marvel from '../../marvel/marvelApi';

class CharacterList extends Component {
    state = {
        characters: this.marvelGetData.getAllCharacters()
    }

    marvelGetData = new Marvel();



    render() {
        return (
            <div className="page-content__character-list character-list">
                <ul className="character-list__grid">
                    {this.state.characters.forEach(item => {
                        <CharacterCard name={item.name} source={item.thumbnail}></CharacterCard>
                    })}
                </ul>
                <LoadMoreButton></LoadMoreButton>
            </div>
        )
    }
}

export default CharacterList;