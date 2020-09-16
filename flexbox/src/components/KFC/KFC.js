import React from 'react';
import Restaurant from './Restaurant';
import './KFC.scss'




class KFC extends React.Component {
    constructor(props) {
        super(props);
        const menuList = [
            { key: 0, mealItem: 'hamburger' },
            { key: 1, mealItem: 'Wicked Wings' },
            { key: 2, mealItem: 'Nuggests' },
            { key: 3, mealItem: 'Fries' },
            { key: 4, mealItem: 'Coke' }
        ]
        this.state = {
            menuList
        }
    }

    render() {
        const { menuList } = this.state;
        return (
            <div className='container'>
                <div>
                <span>KFC Menu</span>
                </div>
                <div className="menuList">
                    {menuList.map((item) => (
                        <span className="menuList__item">
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