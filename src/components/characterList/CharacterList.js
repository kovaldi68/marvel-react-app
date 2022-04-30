import { Component } from 'react';
import CharacterCard from '../characterCard/CharacterCard';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import Marvel from '../../services/marvelApi';

import './characterList.scss';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    getData = new Marvel();

    componentDidMount() {
        this.getData.getAllCharacters()
        .then(res => this.setState( { data: res }));
    }

    render() {
        return (
            <div className="page-content__character-list character-list">
                <ul className="character-list__grid">
                    {this.state.data.map(item => 
                        <CharacterCard key={item.id} charInfo={item} className={'character-list'}/>
                    )}
                </ul>
                <LoadMoreButton />
            </div>
        )
    }
}

export default CharacterList;