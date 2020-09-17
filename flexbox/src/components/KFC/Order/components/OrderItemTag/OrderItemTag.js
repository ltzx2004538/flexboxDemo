import React from 'react';
import './OrderItemTag.scss';



const OrderItemTag = (props) => (
    <div className='itemTag'>
        <div className='itemTag__Item itemTag__box'>
            <span> {props.mealItem} </span>
        </div>
        <div className='itemTag__volume itemTag__box'>
                <span> x {props.volume} </span>
            </div>
        <div className='itemTag__price itemTag__box'>
            <span>${props.price} </span>
        </div>
    </div>
)


export default OrderItemTag;