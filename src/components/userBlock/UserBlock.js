import { NavLink as Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userActionsSlice';
import CharacterList from '../characterList/CharacterList';

import './userBlock.scss';

function UserBlock() {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.userActions.isLogin);

    return (
        <ul className="page-header__user-block user-block">
            {!isLogin ? 
                <>
                    <li className="user-block__item">
                        <Link className="user-block__link user-block__link--signup" to={AppRoutes.SignUp}>Sign up</Link>
                    </li>
                    <li className="user-block__item">
                        <Link className="user-block__link user-block__link--signin" to={AppRoutes.SignIn}>Sign in</Link>
                    </li>
                </> : null
            }
            {isLogin ?
                <>
                    <li className="user-block__item">
                        <Link className="user-block__link user-block__link--favourites" to={AppRoutes.MyFavs}>Favourites</Link>
                    </li>
                    <li className="user-block__item">
                        <Link className="user-block__link user-block__link--history" to={AppRoutes.SearchHistory}>History</Link>
                    </li>
                    <li className="user-block__item">
                        <Link onClick={() => {
                            dispatch(logout());
                            CharacterList.render();
                        }} className="user-block__link user-block__link--signout" to={AppRoutes.Main}>Sign Out</Link>
                    </li>
                </> : null
            }
        </ul>
    )
}

export default UserBlock;