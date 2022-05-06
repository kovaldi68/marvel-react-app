import { NavLink as Link } from 'react-router-dom';
import { LogoContext } from '../app/App';

import './logo.scss';

function Logo() {
    return (
        <LogoContext.Consumer>
            {value => (
                <div className="logo">
                    <Link className="logo__link" to='/'>
                        <img className="logo__image" src="../../content/img/logo-red.png" width="120" height="48" alt="logo" />
                        <span className="logo__text">{value}</span>
                    </Link> 
                </div>
            )}
        </LogoContext.Consumer>
    )
}

export default Logo;