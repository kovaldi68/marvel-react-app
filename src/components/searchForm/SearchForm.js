import { Component } from "react";
import './searchForm.scss';
import '../../style/button.scss';

class SearchForm extends Component {
    render() {
        return (
            <form action='' className="page-content__search-form search-form">
                <div className="search-form__search-wrapper">
                    <label className="search-form__search-label" htmlFor="characterName">Find your favourite character by its name:</label>
                    <input className="search-form__search-input" id="characterName" name='characterName' type='text' placeholder="Enter name of the best character in the world"/>
                    <button type="submit" className="search-form__button button button--find">find</button>
                </div>
            </form>
        )
    }
}

export default SearchForm;