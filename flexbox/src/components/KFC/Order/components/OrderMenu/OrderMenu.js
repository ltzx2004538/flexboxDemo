import React from 'react';
import './OrderMenu.scss';
import OrderMenuItem from './components/OrderMenuItem';



const OrderMenu = ({
    menuList,
    disableBtn,
    onClick,
}) => (
        <div className="menuList">
            {menuList.map((item) => (
                <OrderMenuItem disableBtn = {disableBtn}
                               key={item.key}
                               item={item}
                               onClick={onClick}
                />
            ))}
        </div>
    )
export default OrderMenu;