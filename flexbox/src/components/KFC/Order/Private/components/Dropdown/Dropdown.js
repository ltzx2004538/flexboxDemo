import React from 'react';
import SearchBar from '../SearchBar';
import './Dropdown.scss';



const Dropdown =({
    showDropdown,
    children
})=>{
    let className = "dropdown "
    if (showDropdown){
        className += "dropdown__active"
    }

    return(
        <div className={className}>
            <div className = 'dropdown__corner'/>
            <SearchBar/>



        </div>
    )
}

export default Dropdown;