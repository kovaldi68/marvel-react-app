import './logo.scss';

function Logo() {
    return (
        <div className="logo">
            <a className="logo__link" href='/'>
                <img className="logo__image" src="../../content/img/logo-red.png" width="120" height="48" alt="logo" />
                <span className="logo__text">Universe</span>
            </a>
        </div>
    )
}

export default Logo;