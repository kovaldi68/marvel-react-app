import Logo from "../logo/Logo";
import UserBlock from "../userBlock/UserBlock";
import './pageFooter.scss';

function PageFooter() {
    return (
        <footer className="page-footer">
            <div className="page-footer__container container">
                <Logo></Logo>

                <UserBlock></UserBlock>
            </div>
        </footer>
    )
}

export default PageFooter;