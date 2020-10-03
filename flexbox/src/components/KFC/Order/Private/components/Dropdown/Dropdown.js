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
            <div className='block'>
                <SearchBar />
            </div>
            <div className='block'>
                <Select>
                    Contacts
                </Select>
            </div>
        </div>
    )
}

export default Dropdown;