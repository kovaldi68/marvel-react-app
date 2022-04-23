import './pageContent.scss';

function PageContent(props) {
    return (
        <main className="page-content">
            <div className="page-content__container container">
                {props.children}
            </div>
        </main>
    )
}

export default PageContent;