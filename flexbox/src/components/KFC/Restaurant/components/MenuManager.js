import React from 'react';
import "./MenuManager.scss";




const MenuManager = ({
  mealItem,
  onClick
}) => (
  <div className="menuWrapper">
    <div className="menuLabel">
      {mealItem}
    </div>
    <div className="menuButton">
      <button className='soldOut'
               onClick={(event) => {
                event.preventDefault();
                onClick();
              }}
      > sold out</button>
    </div>
  </div>
)

export default MenuManager;