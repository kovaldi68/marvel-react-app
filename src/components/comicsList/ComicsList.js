// import { Component } from "react";
import { Component } from 'react';
import { ComicsCard } from '../comicsCard/ComicsCard';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import Marvel from '../../services/marvelApi';

import './comicsList.scss';

class ComicsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    getData = new Marvel();

    componentDidMount() {
        this.getData.getAllComics()
        .then(res => this.setState( { data: res }));
    }

    render() {
        return (
            <div className="page-content__comics-list comics-list">
                <ul className="comics-list__grid">
                    {this.state.data.map(item => 
                        <ComicsCard key={item.id} comicInfo={item}></ComicsCard>
                    )}
                </ul>
                <LoadMoreButton/>
             </div>
        )
    }
}

export default ComicsList;