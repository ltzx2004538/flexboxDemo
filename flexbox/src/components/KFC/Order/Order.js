import React from 'react';
import OrderMenu from './components/OrderMenu';
import OrderItemTag from './components/OrderItemTag';
import Meal from '../../../js/Meal';
import './Order.scss';


class Order extends React.Component {
    constructor(props) {
        super(props);
        const defaultValue = "Select your order";
        this.state = {
            defaultValue,
            orderList: [],
            active: false
        }
        this.onClickMenuButton = this.onClickMenuButton.bind(this);
    }

    onClickMenuButton(selectedItemKey) {
        const updateOrderList = this.checkDuplicateItem(selectedItemKey);
        console.log(updateOrderList.toString());
        this.setState({
            orderList: updateOrderList,
        })
        this.displayOrder();
        console.log("order list" + this.state.orderList.length);
    }

    displayOrder() {
        if (this.state.orderList.length !== 0)
            this.setState({
                active: true
            })
    }

    checkDuplicateItem(selectedItemKey) {
        const checkList = this.state.orderList;
        for (let item in checkList) {
            if (checkList[item].key === selectedItemKey) {
                checkList[item].volume += 1
                return checkList;
            }
        }
        const meal = new Meal(selectedItemKey, this.props.menuList[selectedItemKey].menuItem, 1)
        checkList.push(meal);
        return checkList;
    }

    render() {
        const { defaultValue, orderList, active } = this.state;
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
                        Your order :
                  </div>
                    <div className="orderBar__right">
                        {active ?
                            orderList.map((item) => (
                                <OrderItemTag
                                    key={item.key}
                                    mealItem={item.mealItem}
                                    volume={item.volume} />
                            ))
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