import './userBlock.scss';

function UserBlock() {
    return (
        <ul className="page-header__user-block user-block">
            {/* <li className="user-block__item ">
                <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
            </li> */}
            <li className="user-block__item">
                <a className="user-block__link user-block__link--signin" href="">Sign in</a>
            </li>
            <li className="user-block__item">
                <a className="user-block__link user-block__link--signup user-block__link--footer" href="">Sign up</a>
            </li>
        </ul>
    )
}

export default UserBlock;