import { NavLink as Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

import './userBlock.scss';

function UserBlock() {
    return (
        <ul className="page-header__user-block user-block">
            <li className="user-block__item">
                <Link className="user-block__link user-block__link--signup" to={AppRoutes.SignUp}>Sign up</Link>
            </li>
            <li className="user-block__item">
                <Link className="user-block__link user-block__link--signin" to={AppRoutes.SignIn}>Sign in</Link>
            </li>
            <li className="user-block__item">
                <Link className="user-block__link user-block__link--favourites" to={AppRoutes.MyFavs}>Favourites</Link>
            </li>
            <li className="user-block__item">
                <Link className="user-block__link user-block__link--history" to={AppRoutes.SearchHistory}>History</Link>
            </li>
        </ul>
    )
}

export default UserBlock;