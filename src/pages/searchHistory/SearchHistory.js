import { NavLink as Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllQueries, updateUser } from '../../store/userActionsSlice';

import './searchHistory.scss'

export function SearchHistory() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userActions.user)
    const historyState = user.searchHistory;

    return (
        <div className="page-content__search-history search-history">
            <h2 className="search-history__title">Search History:</h2>
            <button onClick={() => {
                    dispatch(deleteAllQueries(historyState));
                    dispatch(updateUser({...user, searchHistory: []}));
                }}
                    className='search-history__button button'
                    type='button'>Remove All
            </button>
            <ul className="search-history__list">
                {historyState.map(item => (
                    <li key={item} className="search-history__item">
                        <Link className="search-history__link" to="/">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}