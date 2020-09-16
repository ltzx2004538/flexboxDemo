import React from 'react';
import MenuManager from './components/MenuManager';
import './Restaurant.scss';
import RestaurantManage from './components/MenuManager';





class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuAlpha: this.props.menu,
            menuBeta: this.props.menu,
        }
        this.handleButtonAlpha = this.handleButtonAlpha.bind(this);
    }


    handleButtonAlpha(soldOutItem){
        console.log(soldOutItem);
        let newMenu = this.state.menuAlpha;
        for (let key in newMenu) {
            if (newMenu[key].key === soldOutItem) {
                newMenu.splice(key, 1)
            }
        }
        this.setState({
            menuAlpha: newMenu,
        });
        console.log("length" + this.props.menu.length);
    }

    render() {
        const { menuAlpha, menuBeta } = this.state;
        return (
            <div className="restaurantList">
                <div className="restaurant">
                    <span>Alpha</span>
                    <div className="restaurant__menu">
                        {menuAlpha.map((item) => (
                            <MenuManager mealItem={item.mealItem} 
                                         onClick={()=>this.handleButtonAlpha(item.key)}
                            
                            />
                        ))}
                    </div>
                </div>
                <div className="restaurant">
                    <span>Beta</span>
                    <div className="restaurant__menu">
                        {menuAlpha.map((item) => (
                            <MenuManager mealItem={item.mealItem} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant;