import React from 'react';
import Dropdown from './components/Dropdown';
import './searchDropdown.scss';



class searchDropdown extends React.Component {
    constructor(props) {
        const restaurantList = [
            { key: 0, name: 'Alpha', address: '100 Abc Street', suburb: 'Sydney', state: 'NSW' },
            { key: 1, name: 'Beta', address: '200 Bbc Street', suburb: 'Melbourne', state: 'VIC' },
            { key: 2, name: 'Gama', address: '200 Bbc Street', suburb: 'Melbourne', state: 'NSW' }
        ]
        super(props);
        this.state = {
            showDropdown: false,
            restaurantList,
        }
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown,
        })
        )
    }

    render() {
        const {showDropdown} = this.state;
       
        return (
            <div className='searchDropdown'>
                <div className='searchDropdown__label'>
                     <button className = 'searchDropdown__label__btn'
                             onClick = {this.onClickButton}> 
                             Hurstville 
                     </button>
                </div>
                <Dropdown showDropdown = {showDropdown}/>
               
               
            </div>
        )
    }
}

export default searchDropdown;