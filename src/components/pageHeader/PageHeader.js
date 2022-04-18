import UserBlock from "../userBlock/UserBlock";
import Logo from "../logo/Logo";
import './pageHeader.scss';

function PageHeader() {
    return (
        <header className="page-header">
            <div className="page-header__container container">
                <Logo></Logo>

                <UserBlock></UserBlock>
            </div>
        </header>
    )
}

export default PageHeader;