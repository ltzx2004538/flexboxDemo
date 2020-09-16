import React from 'react';
import Restaurant from './Restaurant';
import Order from './Order';
import './KFC.scss'




class KFC extends React.Component {
    constructor(props) {
        super(props);
        const menuList = [
            { key: 0, menuItem: 'Hamburger', volume: 99 },
            { key: 1, menuItem: 'Wicked Wings',volume: 99},
            { key: 2, menuItem: 'Nuggests',volume: 99 },
            { key: 3, menuItem: 'Fries',volume: 99 },
            { key: 4, menuItem: 'Coke',volume: 99 }
        ]
        this.state = {
            menuList,
            orderList:[],
        }
        
    }


    render() {
        const { menuList } = this.state;
        return (
            <div className='container'>
                <Order menuList = {menuList}               
                />
                <div className='restaurantList'>
                    <Restaurant menu={menuList} />
                </div>
            </div>
        )
    }
}

export default KFC;