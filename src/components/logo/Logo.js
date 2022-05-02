import { NavLink as Link } from 'react-router-dom';

import './logo.scss';

function Logo() {
    return (
        <div className="logo">
            <Link className="logo__link" to='/'>
                <img className="logo__image" src="../../content/img/logo-red.png" width="120" height="48" alt="logo" />
                <span className="logo__text">Universe</span>
            </Link>
        </div>
    )
}

export default Logo;