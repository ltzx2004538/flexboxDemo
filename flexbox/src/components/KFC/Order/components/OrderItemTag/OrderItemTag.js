import React from 'react';
import './OrderItemTag.scss';




const OrderItemTag = (props) => (
    <div className='itemTag'>
        <div className='itemTag__Item'>
            {props.mealItem}
        </div>
        <div className='itemTag__volume'>
            {props.volume}
        </div>
    </div>
)


export default OrderItemTag;