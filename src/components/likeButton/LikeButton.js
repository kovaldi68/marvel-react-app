import PropTypes from 'prop-types';
import { toggleFavourites } from '../store/userActionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';

export function LikeButton(props) {
    const { id } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.userActions.user)
    const favourites = user.favs;
    const isFavourite = favourites.includes(id);
    const isLogin = useSelector((state) => state.userActions.isLogin);

    return (
        <button
            onClick={(e) => 
                isLogin ? (
                    e.target.classList.toggle('button--liked'),
                    dispatch(toggleFavourites(id))
                ) : (
                    navigate(AppRoutes.SignIn)
                )
            }
            className={`${props.className}__like button--like ${isFavourite ? 'button--liked' : ''}`}
            type="button"
            aria-label="Поставить лайк"
        />
    ); 
}

LikeButton.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string
}