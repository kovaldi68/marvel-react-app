import { Component } from 'react';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import CharacterCard from '../characterCard/CharacterCard';
import Marvel from '../../services/marvelApi';

import './characterList.scss';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.numberOfNewChars = 50;

        this.state = {
            data: [],
            loading: true,
            hasError: false,
            newItemsLoading: false,
            offset: 250,
            charEnded: false
        };
    }

    getData = new Marvel();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onDataLoading();
        this.getData.getAllCharacters(offset)
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    onDataLoading = () => {
        this.setState({
            newItemsLoading: true
        })
    }

    onDataLoaded = (newData) => {
        this.setState(({ offset, data }) => ({
            data: [...data, ...newData],
            loading: false,
            newItemsLoading: false,
            offset: offset + this.numberOfNewChars
        }))
    }

    onError = () => {
        this.setState({
            hasError: true,
            loading: false
        })
    }

    render() {
        const { offset, newItemsLoading } = this.state;

        return (
            this.state.error ? <ErrorMessage /> :
            <div className="page-content__character-list character-list">
                <ul className="character-list__grid">
                    {this.state.data.map(item => 
                        <CharacterCard 
                            key={item.id}
                            charInfo={item}
                            className={'character-list'}
                        />
                    )}
                </ul>
                <button 
                    type="button"
                    className="character-list__load-button button button--load"
                    disabled={newItemsLoading}
                    onClick={() => {
                        this.onRequest(offset)
                    }}
                >
                    i want to see more
                </button>
            </div>
        )
    }
}

export default CharacterList;