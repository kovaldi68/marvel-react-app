import { Component } from 'react';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { Loading } from '../loading/Loading';
import CharacterCard from '../characterCard/CharacterCard';
import Marvel from '../../services/marvelApi';

import './characterList.scss';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.numberOfNewChars = 40;

        this.state = {
            data: [],
            firstLoading: true,
            loading: true,
            newItemsLoading: false,
            hasError: false,
            offset: 210,
            dataEnded: false
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
        let lastData = false;
        if ((this.getData._totalCharacters - this.state.offset) <= 40) {
            lastData = true;
        }

        this.setState(({ offset, data }) => ({
            data: [...data, ...newData],
            loading: false,
            firstLoading: false,
            newItemsLoading: false,
            offset: offset + this.numberOfNewChars,
            dataEnded: lastData,
        }))
    }

    onError = () => {
        this.setState({
            hasError: true,
            loading: false
        })
    }

    render() {
        const { data, loading, hasError, offset, newItemsLoading, dataEnded } = this.state;
        
        const loadingSpinner = loading ? <Loading /> : null;

        return (
            hasError ? <ErrorMessage /> :
            <div className="page-content__character-list character-list">
                { loadingSpinner }
                <ul className="character-list__grid">
                    {data.map(item => 
                        <CharacterCard 
                            key={item.id}
                            charInfo={item}
                            className={'character-list'}
                        />
                    )}
                </ul>
                {this.state.firstLoading ? null : 
                <button 
                    type="button"
                    className="character-list__load-button button button--load"
                    disabled={newItemsLoading}
                    style={dataEnded ? {'visibility' : 'hidden'} : {'visibility' : 'visible'}}
                    onClick={() => {
                        this.onRequest(offset)
                    }}
                >
                    i want to see more
                </button>}
            </div>
        )
    }
}

export default CharacterList;