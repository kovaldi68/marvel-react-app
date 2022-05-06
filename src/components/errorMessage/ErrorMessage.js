import './errorMessage.scss';

export const ErrorMessage = () => {
    return (
        <div className='page-content__error-message error-message'>
            <p className='error-message__text'> Oops..Sorry, but something went wrong... </p>
            <img className='error-message__image' src='../content/img/error.gif' alt='Error' width='360' height='356'/>
        </div>
    )
}