import './form.scss';

export function Form({ title, button, link }) {
    return (
        <form className="page-content__form form">
            <h2 className="form__title">{title}</h2>
            <div className="form__input-wrapper">
                <label className="form__label" htmlFor="email">Your email:</label>
                <input type="text" className="form__input form__input--email" name="email" placeholder='Enter your email address'></input>
            </div>
            <div className="form__input-wrapper">
                <label className="form__label" htmlFor="email">Your password:</label>
                <input type="password" className="form__input form__input--password" name="email" placeholder='Enter your email password'></input>
            </div>
            <a  className="form__link" href="">{link}</a>
            <button type='submit' className="form__button button button-submit">{button}</button>
        </form>
    )
}