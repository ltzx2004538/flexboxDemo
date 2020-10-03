import React from 'react';
import './Select.scss';



const ContactSelect =({
    children,
})=>{

    return(
        <div className="contactSelect">
            <div className="contactSelect__title">
              {children}
            </div>
           
        </div>
    )
}

export default ContactSelect;