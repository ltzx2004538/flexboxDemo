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
                        <span className="menuList__item"
                               key = {item.key}
                        >
                            {item.mealItem}
                        </span>
                    ))}
                </div>
                <div className='restaurantList'>
                    <Restaurant menu={menuList} />
                </div>
            </div>
        )
    }
}

export default KFC;