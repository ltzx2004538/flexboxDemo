import React from 'react';
import Restaurant from './Restaurant';
import Order from './Order';
import './KFC.scss';
import Fries from '../../img/fries.jpg';
import Burger from '../../img/burger.jpg';
import Nuggets from '../../img/nuggets.jpg';
import Coke from '../../img/pepsi.jpg';
import WickedWings from '../../img/wicked-wings.jpg';




class KFC extends React.Component {
    constructor(props) {
        super(props);
        const menuList = [
            { key: 0, menuItem: 'Burger', price:5,volume: 99,pic:Burger},
            { key: 1, menuItem: 'Wicked Wings',price:2,volume: 99,pic:WickedWings},
            { key: 2, menuItem: 'Nuggests',price:6,volume: 99,pic:Nuggets},
            { key: 3, menuItem: 'Fries',price:3,volume: 99,pic:Fries},
            { key: 4, menuItem: 'Coke',price:2,volume: 99,pic:Coke}
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