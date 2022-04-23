import './comicsCard.scss';

export function ComicsCard({ title, thumb, price }) {
    return (
        <li className="comics-list__item">
            <a className="comics-list__link" href="">
                <div className="comics-list__poster">
                    <img className="comics-list__image" src={thumb} alt="" width="225" height="310"/>
                </div>
                <p className="comics-list__name">{title}</p>
                <span className="comics-list__price">{price}$</span>
            </a>
        </li>
    )
}