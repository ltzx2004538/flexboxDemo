import React from 'react';
import OrderItemTag from './components/OrderItemTag';
import './Checkout.scss';




const Checkout = (props) => (
    <div className='checkout'>
        <div className="checkout__left">
            <div className='checkout__left__label'>
                Your order :
             </div>
            {props.active ?
                <div className='checkout__left__total'>
                    Total:
                 </div>
                :
                ''
            }
        </div>
        <div className="checkout__right">
            {props.active ?
                <div className='checkout__right__payment'>
                    {props.orderList.map((item) => (
                        <OrderItemTag
                            key={item.key}
                            mealItem={item.mealItem}
                            volume={item.volume}
                            price={item.price} />
                    ))}
                    <div className='checkout__right__payment__total'>
                        ${props.totalPrice}
                    </div>
                </div>
                :
                <div>
                    {props.defaultValue}
                </div>
            }
        </div>
    </div>
)


export default Checkout;