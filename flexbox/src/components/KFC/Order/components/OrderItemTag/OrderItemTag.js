import React from 'react';
import './OrderItemTag.scss';



const OrderItemTag = (props) => (
    <div className='itemTag'>
        <div className='itemTag__Item'>
            <span> {props.mealItem} </span>    
        </div>
        <div className='itemTag__volume'>
            x {props.volume}
        </div>
        <div className='itemTag__price'>
            ${props.price}
        </div>
    </div>
)


export default OrderItemTag;