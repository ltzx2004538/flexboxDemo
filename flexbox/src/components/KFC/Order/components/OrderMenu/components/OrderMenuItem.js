import React from 'react';
import OrderMenu from '../OrderMenu';
import './OrderMenuItem.scss';


const OrderMenuItem = ({
    item,
    disableBtn,
    onClick,
}) => {
    let btnClassName = "orderBtn";

    if(!disableBtn){
        console.log("Menu "+ disableBtn);
        btnClassName += ' orderBtn--active';
    }

    return (
        <div className='menuList__item'>
            <div className='menuList__item__picContainer'>
                <img className='menuList__item__picContainer__menupic'
                    src={item.pic} alt="pic" />
            </div>
            <div className="menuList__item__detail">
                <div className="menuList__item__detail__text">
                    {item.menuItem}: ${item.price}
                </div>
                <div className="menuList__item__detail__order">
                    <button 
                        disabled={disableBtn}
                        className={btnClassName}
                        onClick={() => onClick(item.key)}
                    >
                        Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderMenuItem;