import {NavLink as Link} from 'react-router-dom';

import './error404.scss';

export function Error404() {
    return (
        <section className='page-content__error404 error404'>
            <h1 className='error404__title'>
                404 Page Not Found
            </h1>
            <p className='error404__text'>
                Not even the Eye of Uatu sees your request...
            </p>
            <p className='error404__description'>
                Check that you typed the address correctly, go back to your previous page or click the link below.
            </p>
            <Link to='/' className='error404__link'>return to main page</Link>
        </section>
    );
}