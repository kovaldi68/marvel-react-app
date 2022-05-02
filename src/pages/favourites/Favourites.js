import { useDispatch, useSelector } from 'react-redux';
import { FavouritesItem } from '../../components/favouritesItem/FavouritesItem';
import { deleteAll } from '../../components/store/favouritesSlice';

import './favourites.scss';

export function Favourites() {
    const dispatch = useDispatch();
    const favsState = useSelector(state => state.favourites);
    
    return (
        <div className="page-content__favourites favourites">
            <h2 className="favourites__title">Your Favourites:</h2>
            <button onClick={() => dispatch(deleteAll(favsState))}
                    className='favourites__button button'
                    type='button'>Remove All
            </button>
            <ul className="favourites__list">
                {favsState.favs.map((item) => (
                    <FavouritesItem key={item} id={item}></FavouritesItem>
                ))}
            </ul>
        </div>  // {/* <CharacterCard className={'favourites'}/> */}
    )
}