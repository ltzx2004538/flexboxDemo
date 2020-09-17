import React from 'react';
import './OrderMenu.scss';
import OrderMenuItem from './components/OrderMenuItem';



const OrderMenu = ({
    menuList,
    onClick,
}) => (
        <div className="menuList">
            {menuList.map((item) => (
                <OrderMenuItem key={item.key}
                               item={item}
                               onClick={onClick}
                />
            ))}
        </div>
    )
export default OrderMenu;