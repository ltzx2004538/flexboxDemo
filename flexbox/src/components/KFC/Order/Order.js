import React from 'react';
import OrderMenu from './components/OrderMenu';
import Checkout from'./components/Checkout';
import Meal from '../../../js/Meal';
import OrderLocation from './components/OrderLocation';
import Calculator from '../../../js/Calculator';
import './Order.scss';


class Order extends React.Component {
    constructor(props) {
        super(props);
        const defaultValue = "Select your order";
        this.state = {
            defaultValue,
            orderList: [],
            totalPrice: 0,
            active: false
        }
        this.onClickMenuButton = this.onClickMenuButton.bind(this);
    }

    onClickMenuButton(selectedItemKey) {
        const updateOrderList = this.checkDuplicateItem(selectedItemKey);
        const updateTotalPrice = Calculator.checkout(updateOrderList);
        this.setState({
            orderList: updateOrderList,
            totalPrice: updateTotalPrice
        })
        this.displayOrderList();
    }

    displayOrderList() {
        if (this.state.orderList.length !== 0)
            this.setState({
                active: true
            })
    }

    checkDuplicateItem(selectedItemKey) {
        const checkList = this.state.orderList;
        const singlePrice = this.props.menuList[selectedItemKey].price;
        for (let item in checkList) {
            if (checkList[item].key === selectedItemKey) {
                checkList[item].volume += 1;
                checkList[item].price = Calculator.multiItemsPrice(singlePrice, checkList[item].volume);
                return checkList;
            }
        }
        const meal = new Meal(selectedItemKey,
            this.props.menuList[selectedItemKey].menuItem,
            1, this.props.menuList[selectedItemKey].price)
        checkList.push(meal);
        return checkList;
    }

    render() {
        const { defaultValue, orderList, active, totalPrice } = this.state;
        return (
            <div>
                <div className='title'>
                    KFC Menu
                </div>
                <OrderMenu menuList={this.props.menuList}
                    onClick={this.onClickMenuButton}
                />
                <div className="orderBar">
                    <OrderLocation restaurantList = {this.props.restaurantList}/>
                    <Checkout active={active}
                              orderList={orderList}
                              defaultValue={defaultValue}
                              totalPrice={totalPrice}
                    />
                </div>
            </div>
        );
    }
}

export default Order