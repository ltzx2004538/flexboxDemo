import React from 'react';
import OrderMenu from '../OrderMenu';
import './OrderMenuItem.scss';


const OrderMenuItem = ({
    item,
    onClick
}) => (
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
                    <button className="menuList__item__detail__order__btn"
                        key={item.key}
                        onClick={() => onClick(item.key)}
                    >
                        Order
            </button>
                </div>
            </div>
        </div>
    )

export default OrderMenuItem;