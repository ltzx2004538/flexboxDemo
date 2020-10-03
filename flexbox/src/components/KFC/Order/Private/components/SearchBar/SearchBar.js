import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';


const searchBar = ({
    children
}) => {
    return (
        <div className='searchBar'>
            <form className="searchBar__form"
            >
                <input className="searchBar__input"
                       placeholder = "Search all records"
                />
            </form>
            <div className="searchBar__right">
                <button className="searchBar__right__btn">
                    <FontAwesomeIcon className="searchBar__right__btn__icon" icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default searchBar;