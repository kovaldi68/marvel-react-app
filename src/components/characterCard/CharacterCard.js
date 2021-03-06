import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { LikeButton } from '../likeButton/LikeButton';

import './characterCard.scss';

function CharacterCard({ charInfo, className }) {
    const { id, name, thumbnail } = charInfo;
    const charLink = `/characters/${id}`;

    return (
        <li className={`${className}__item`}>
            <Link className={`${className}__link`} to={charLink}>
                <div className={`${className}__poster`}>
                    <img
                        className={`${className}__image`}
                        src={thumbnail}
                        alt={name}
                        width="225"
                        height="310"
                        style={(thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? {'objectFit': 'unset'} : {'objectFit': 'cover'}}
                    />
                </div>
                <p className={`${className}__name`}>{name}</p>
            </Link>
            <LikeButton className={className} id={id}/>
        </li>
    )
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    className: PropTypes.string
}

export default CharacterCard;