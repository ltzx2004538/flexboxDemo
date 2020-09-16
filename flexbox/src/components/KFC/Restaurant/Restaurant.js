import React from 'react';
import MenuManager from './components/MenuManager';
import './Restaurant.scss';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuAlpha: this.props.menu, //浅拷贝
            menuBeta: this.props.menu, //浅拷贝
        }
        this.handleSoldOutButtonAlpha = this.handleSoldOutButtonAlpha.bind(this);
        this.handleSoldOutButtonBeta = this.handleSoldOutButtonBeta.bind(this);
        this.onVolumeChange = this.onVolumeChange.bind(this);
    }


    handleSoldOutButtonAlpha(soldOutItem) {
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

    onVolumeChange(itemKey, inputVolume) {
        console.log("volue" + inputVolume);
        console.log("key" + itemKey);
        let newMenu = this.state.menuAlpha;
        for (let key in newMenu) {
            if (newMenu[key].key === itemKey) {
                newMenu[key].volume = inputVolume;
                console.log("new value" + newMenu[key].volume);
            }
        }
        this.setState({
            menuAlpha: newMenu,
        });
    }

    handleSoldOutButtonBeta(soldOutItem) {
        console.log(soldOutItem);
        let newMenu = this.state.menuBeta;
        for (let key in newMenu) {
            if (newMenu[key].key === soldOutItem) {
                newMenu.splice(key, 1)
            }
        }
        this.setState({
            menuBeta: newMenu,
        });
        console.log("length" + this.props.menu.length);
    }

    render() {
        const { menuAlpha, menuBeta } = this.state;
        return (
            <div className="restaurantList">
                <div className="restaurant">
                    <div className='restaurant__name'>
                        Restaurant Alpha
                     </div>
                    <div className="restaurant__menu">
                        {menuAlpha.map((item) => (
                            <MenuManager
                                key={item.key}
                                itemKey={item.key}
                                menuItem={item.menuItem}
                                volume={item.volume}
                                onClickSoldOut={() => this.handleSoldOutButtonAlpha(item.key)}
                                onVolumeChange={this.onVolumeChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="restaurant">
                <div className='restaurant__name'>
                        Restaurant Beta
                     </div>
                    <div className="restaurant__menu">
                        {menuBeta.map((item) => (
                            <MenuManager
                                key={item.key}
                                menuItem={item.menuItem}
                                volume={item.volume}
                                onClick={() => this.handleSoldOutButtonBeta(item.key)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant;