import './characterCard.scss';

function CharacterCard({name, source}) {
    return (
        <li className="character-list__item">
            <a className="character-list__link" href="">
                <div className="character-list__poster">
                    <img className="character-list__image" src={source} alt={name} width="225" height="310"/>
                </div>
                <p className="character-list__name">{name}</p>
            </a>
        </li>
    )
}

export default CharacterCard;