import React from 'react';

import './SearchBar.scss';


const searchBar = ({
    children
}) => {
    return (
        <div className='searchBar'>
            <form  className = "searchBar__form"
            >
                <input className="searchBar__input"
                />
            </form>
        </div>
    )
}

export default searchBar;