import { Component } from 'react';
import './comicsCard.scss';

class ComicsCard extends Component {
    render() {
        return (
            <li className="comics-list__item">
                <a className="comics-list__link" href="">
                    <div className="comics-list__poster">
                        <img className="comics-list__image" src="content/img/wonder-woman.jpg" alt="" width="225" height="310"/>
                    </div>
                    <p className="comics-list__name">Wonder Woman</p>
                    <span className="comics-list__price">9.99$</span>
                </a>
            </li>
        )
    }
}

export default ComicsCard;