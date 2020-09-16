import React from 'react';
import Restaurant from './Restaurant';
import './KFC.scss'




class KFC extends React.Component {
    constructor(props) {
        super(props);
        const menuList = [
            { key: 0, mealItem: 'Hamburger', volume: 99 },
            { key: 1, mealItem: 'Wicked Wings',volume: 99},
            { key: 2, mealItem: 'Nuggests',volume: 99 },
            { key: 3, mealItem: 'Fries',volume: 99 },
            { key: 4, mealItem: 'Coke',volume: 99 }
        ]
        this.state = {
            menuList
        }
    }

    render() {
        const { menuList } = this.state;
        return (
            <div className='container'>
                <div className = 'title'>
                    KFC Menu
                </div>
                <div className="menuList">
                    {menuList.map((item) => (
                        <button className="menuList__item"
                               key = {item.key}
                        >
                            {item.mealItem}
                        </button>
                    ))}
                </div>
                <div className="orderBar">
                    <div className="orderBar__left">
                           Your order :
                    </div>
                    <div className="orderBar__right">
                        Select your order
                    </div>
                </div>
                <div className='restaurantList'>
                    <Restaurant menu={menuList} />
                </div>
            </div>
        )
    }
}

export default KFC;