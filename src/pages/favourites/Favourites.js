import { useSelector } from 'react-redux';
// import { useState, useEffect } from "react";
// import Marvel from '../../services/marvelApi';

// import LikeButton from "../../components/likeButton/LikeButton";

import './favourites.scss';

export function Favourites() {
    // const [char, setChar] = useState(0);
    const { favs } = useSelector(state => state.favourites);

    return (
        <div className="page-content__favourites favourites">
            <h2 className="favourites__title">Your Favourites:</h2>
            <ul className="favourites__list">
                {favs.map((item) => 
                     <li>{item}</li>
                    )
                }
                {/* <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites`}/>
                    </div>
                </li>
                {/* <CharacterCard className={'favourites'}/> */}
            </ul>
        </div>
        
    )
}