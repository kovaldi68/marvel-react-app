import { NavLink as Link } from "react-router-dom";
import { AppRoutes } from '../../const';

import './contentList.scss';

function ContentList() {
    return (
        <ul className="page-content__content-list content-list">
            <li className="content-list__item">
                <Link to={AppRoutes.MainChars} className={({ isActive }) => isActive ? "content-list__link--active": 'content-list__link'}>Superheroes</Link>
            </li>
            /
            <li className="content-list__item">
                <Link to={AppRoutes.MainComics} className={({ isActive }) => isActive ? "content-list__link--active": 'content-list__link'}>Comics</Link>
            </li>
        </ul>
    )
}

export default ContentList;