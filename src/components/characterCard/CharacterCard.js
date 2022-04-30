import { NavLink as Link } from 'react-router-dom';
import LikeButton from '../likeButton/LikeButton';
import './characterCard.scss';

function CharacterCard({ charInfo, className }) {
    const {id, name, thumbnail} = charInfo;
    const charLink = `/characters/${id}`;

    return (
        <li className={`${className}__item`}>
            <Link className={`${className}__link`} to={charLink}>
                <div className={`${className}__poster`}>
                    <img className={`${className}__image`} src={thumbnail} alt={name} width="225" height="310"/>
                    <LikeButton className={`${className}__like`}/>
                </div>
                <p className={`${className}__name`}>{name}</p>
            </Link>
        </li>
    )
}

export default CharacterCard;