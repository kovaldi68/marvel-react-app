import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom";
import { AppRoutes } from '../../const';
import Marvel from '../../services/marvelApi';
import LikeButton from '../../components/likeButton/LikeButton';

import './characterInfo.scss';

function SingleCharacterPage() {
    const [char, setChar] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const getData = new Marvel();

        getData.getCharacter(id)
        .then(res => setChar(res));
    });

    return (
        <div className="page-content__character-info character-info">
            <div className="character-info__poster">
                <img className="character-info__image" src={char.thumbnail} alt={char.name} width="320" height="420"/>
                <LikeButton className={'character-info__like'}/>
            </div>
            <div className="character-info__descr">
                <Link className="character-info__link button button--back" to={AppRoutes.MainChars}>back to the list</Link>
                <h2 className="character-info__title">{char.name}</h2>
                <p className="character-info__bio">{char.description ? char.description : 'No description yet'}</p>
                <ul className="character-info__comics-list">Comics:
                    {/* {char.comics.map((item, index) => 
                        <li key={index} className="character-info__comics-item">
                            <Link to='\'>{item.name}</Link>
                        </li>
                    )} */}
                </ul>
            </div>
        </div>
    );
}

export default SingleCharacterPage;