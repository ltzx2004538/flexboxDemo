import React from 'react';
import Restaurant from './Restaurant';
import Order from './Order';
import './KFC.scss'




class KFC extends React.Component {
    constructor(props) {
        super(props);
        const menuList = [
            { key: 0, menuItem: 'Hamburger', price:10,volume: 99 },
            { key: 1, menuItem: 'Wicked Wings',price:2,volume: 99},
            { key: 2, menuItem: 'Nuggests',price:6,volume: 99 },
            { key: 3, menuItem: 'Fries',price:3,volume: 99 },
            { key: 4, menuItem: 'Coke',price:2,volume: 99 }
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