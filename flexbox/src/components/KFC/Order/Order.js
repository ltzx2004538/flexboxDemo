import React from 'react';
import OrderMenu from './components/OrderMenu';
import OrderItemTag from './components/OrderItemTag';
import Meal from '../../../js/Meal';
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
        this.displayOrder();
    }

    displayOrder() {
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
                    <div className="orderBar__left">
                        <div className='orderBar__left__label'>
                            Your order :
                        </div>
                        {active ?
                            <div className='orderBar__left__total'>
                                Total:
                             </div>
                            :
                            ''
                        }
                    </div>
                    <div className="orderBar__right">
                        {active ?
                            <div className='checkout'>
                                {orderList.map((item) => (
                                    <OrderItemTag
                                        key={item.key}
                                        mealItem={item.mealItem}
                                        volume={item.volume}
                                        price={item.price} />
                                ))}
                                <div className='checkout__total'>
                                    ${totalPrice}
                                </div>
                            </div>
                            :
                            <div>
                                {defaultValue}
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Order