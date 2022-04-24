import './searchHistory.scss'

export function SearchHistory() {
    return (
        <div className="page-content__search-history search-history">
            <h2 className="search-history__title">Search History:</h2>
            <ul className="search-history__list">
                <li className="search-history__item">
                    <a className="search-history__link" href="">Search Query</a>
                </li>
                <li className="search-history__item">
                    <a className="search-history__link" href="">Search Query</a>
                </li>
                <li className="search-history__item">
                    <a className="search-history__link" href="">Search Query</a>
                </li>
                <li className="search-history__item">
                    <a className="search-history__link" href="">Search Query</a>
                </li>
                <li className="search-history__item">
                    <a className="search-history__link" href="">Search Query</a>
                </li>
            </ul>
        </div>
    )
}