import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import './Dropdown.scss';



const Dropdown = ({
    showDropdown,
    children
}) => {
    let className = "dropdown "
    if (showDropdown) {
        className += "dropdown__active"
    }

    return (
        <div className={className}>
            <div className='dropdown__corner' />
            <div className='dropdown__inner'>
                <div className='dropdown__inner__wrapper'>
                    <SearchBar />
                </div>
                <Select>
                    Contacts
                </Select>
            </div>
        </div>
    )
}

export default Dropdown;