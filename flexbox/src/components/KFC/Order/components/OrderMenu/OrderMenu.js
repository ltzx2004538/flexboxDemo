import React from 'react';
import './OrderMenu.scss';





const OrderMenu = ({
    menuList,
    onClick,
}) => (
    <div className="menuList">
        {menuList.map((item) => (
            <button className="menuList__item"
                key={item.key}
                onClick={() => onClick(item.key)}
            >
                {item.menuItem}: ${item.price}
            </button>
        ))}
    </div>
)


export default OrderMenu;