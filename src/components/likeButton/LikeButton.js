import { toggleFavourites } from '../store/favouritesSlice';
import { useDispatch } from 'react-redux';

export function LikeButton(props) {
    const dispatch = useDispatch();

    return (
        <button
            onClick={(e) => {
                dispatch(toggleFavourites(props.id))
                e.target.classList.toggle('button--liked');
            }}
            className={`${props.className}__like button--like`}
            type="button"
            aria-label="Поставить лайк"
        />
    ); 
}