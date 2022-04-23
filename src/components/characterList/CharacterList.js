import { Component } from 'react';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import CharacterCard from '../characterCard/CharacterCard';
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
                        <CharacterCard key={item.id} name={item.name} source={item.thumbnail}></CharacterCard>
                    )}
                </ul>
                <LoadMoreButton />
            </div>
        )
    }
}

export default CharacterList;