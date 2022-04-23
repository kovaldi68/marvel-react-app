import { NavLink as Link } from "react-router-dom";
// import { AppRoutes } from '../../const';

import './comicsCard.scss';

export function ComicsCard({ comicInfo }) {
    const {title, thumbnail, price, id } = comicInfo;
    const comicLink = `/comics/${id}`;

    return (
        <li className="comics-list__item">
            <Link className="comics-list__link" to={comicLink}>
                <div className="comics-list__poster">
                    <img className="comics-list__image" src={thumbnail} alt="" width="225" height="340"/>
                </div>
                <div className='comics-list__info'>
                    <p className="comics-list__name">{title}</p>
                    <span className="comics-list__price">{price}$</span>
                </div>
            </Link>
        </li>
    )
}