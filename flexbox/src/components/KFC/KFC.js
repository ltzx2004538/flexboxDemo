import React from 'react';
import Restaurants from './Restaurants';
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
        this.menuList = [
            { key: 0, menuItem: 'Burger', price: 5, volume: 99, pic: Burger },
            { key: 1, menuItem: 'Wicked Wings', price: 2, volume: 99, pic: WickedWings },
            { key: 2, menuItem: 'Nuggests', price: 6, volume: 99, pic: Nuggets },
            { key: 3, menuItem: 'Fries', price: 3, volume: 99, pic: Fries },
            { key: 4, menuItem: 'Coke', price: 2, volume: 99, pic: Coke }
        ]
        this.restaurantList = [
            { key: 0, name: 'Alpha', address: '100 Abc Street', suburb: 'Sydney', state: 'NSW' },
            { key: 1, name: 'Beta', address: '200 Bbc Street', suburb: 'Melbourne', state: 'VIC' }
        ]
        this.state = {
            orderList: [],
        }
    }


    render() {
        return (
            <div className='container'>
                <Order menuList={this.menuList}
                    restaurantList={this.restaurantList}
                />
                <Restaurants menu={this.menuList}
                />
            </div>
        )
    }
}

export default KFC;