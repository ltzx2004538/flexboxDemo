import React from 'react';
import './OrderItemTag.scss';



const OrderItemTag = (props) => (
    <div className='itemTag'>
        <div className='itemTag__Item'>
            <span> {props.mealItem} </span>
        </div>
        <div className='itemTag__volume'>
                <span> x {props.volume} </span>
            </div>
        <div className='itemTag__price'>
            <span>${props.price} </span>
        </div>
    </div>
)


export default OrderItemTag;