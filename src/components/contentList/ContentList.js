import './contentList.scss';

function ContentList() {
    return (
        <ul className="page-content__content-list content-list">
            <li className="content-list__item content-list__item--active">
                <a href="">Superheroes</a>
            </li>
            /
            <li className="content-list__item">
                <a href="">Comics</a>
            </li>
        </ul>
    )
}

export default ContentList;