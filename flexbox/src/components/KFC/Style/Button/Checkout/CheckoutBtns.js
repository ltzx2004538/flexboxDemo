import React from 'react';
import './CheckoutBtns.scss';



const CheckoutBtn = (props) => (
    <button className='checkoutBtn'>
        {props.text}
    </button>
)

const CancelBtn = ({
    text,
    onClick
}) => (
        <button className='cancelBtn'
            onClick={(event) => {
                event.preventDefault();
                onClick();
            }}>
            {text}
        </button>
    )

export default { CheckoutBtn, CancelBtn };