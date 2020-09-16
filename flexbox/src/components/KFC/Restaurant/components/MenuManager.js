import React from 'react';
import "./MenuManager.scss";




const MenuManager = ({
  mealItem,
  volume,
  onClick
}) => (
    <div className="menuWrapper">
      <div className="menuLabel">
        {mealItem}
      </div>
      <div className="itemVolume">
          {volume}
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