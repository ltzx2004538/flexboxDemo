import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import './SelectItem.scss';



const SelectItem = ({
    checked,
    children,
    onClick,
}) => {
    return (
        <div className='selectItem'>
            <div className='selectItem__left' onClick={onClick}>
                {checked ?
                    <FontAwesomeIcon className = 'selectItem__left__checkbox'icon={faCheckSquare} />
                    :
                    // <FontAwesomeIcon className = 'selectItem__left__square' icon={faSquare} />
                    <div className = 'selectItem__left__square'/>
                }
            </div>
            <div className='selectItem__right'>
                {children}
            </div>
        </div>
    )
}


export default SelectItem;