import { useDispatch, useSelector } from 'react-redux';
import { FavouritesItem } from '../../components/favouritesItem/FavouritesItem';
import { deleteAllFavs, updateUser } from '../../components/store/userActionsSlice';
import { store } from '../../components/store/store';

import './favourites.scss';

export function Favourites() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userActions.user)
    const favsState = user.favs;
    
    return (
        <div className="page-content__favourites favourites">
            <h2 className="favourites__title">Your Favourites:</h2>
            <button onClick={() => {
                dispatch(deleteAllFavs(favsState));
                dispatch(updateUser({...user, favs: []}))
            }}
                    className='favourites__button button'
                    type='button'>Remove All
            </button>
            <ul className="favourites__list">
                {favsState.map((item) => (
                    <FavouritesItem key={item} id={item}></FavouritesItem>
                ))}
            </ul>
            <button onClick={() => {
                    console.log(store.getState());
                }} type='button'></button>
        </div>  // {/* <CharacterCard className={'favourites'}/> */}
    )
}