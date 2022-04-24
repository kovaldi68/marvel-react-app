import Logo from "../logo/Logo";
import './pageFooter.scss';

function PageFooter() {
    return (
        <footer className="page-footer">
            <div className="page-footer__container container">
                <Logo />

                <p className="page-footer__info">Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company.</p>
            </div>
        </footer>
    )
}

export default PageFooter;