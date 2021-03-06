import React from 'react';
import Select from 'react-select';
import Location from '../../../../../js/Location';
import './OrderLocation.scss';




class Orderlocation extends React.Component {
    constructor(props) {
        super(props);
        this.defaultText = 'input your location';
        this.state = {
            currentLocation: this.defaultText,
            active: false,
            stateOptions: [],
            locationOptions: [],
            currentLocation: 'Please select a restaurant...',
        }
    }

    createLocations() {
        let label = '';
        let value = 0;
        let locations = [];
        for (let i in this.props.restaurantList) {
            label = `${this.props.restaurantList[i].name} ${this.props.restaurantList[i].address} ${this.props.restaurantList[i].suburb}`;
            const location = new Location.Location(value, label);
            locations.push(location);
            value += 1;
        }
        this.setState({
            locationOptions: locations,
        })
        this.toggleInput = this.toggleInput.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    toggleInput() {
        this.setState({
            active: !this.state.active,
        });
    }

    handleOnchange(newValue, actionMeta) {
        console.log(newValue.label);
        this.setState({
            currentLocation: newValue.label,
        })
        if(this.state.currentLocation != this.defaultText){
            this.props.checkLocation(true);
         }
        this.toggleInput();
    }

    componentWillMount() {
        this.createLocations();
    }

    render() {
        const { locationOptions, currentLocation, active } = this.state;
        return (
            <div className='location'>
                {active ?
                    <Select className="location__select"
                        placeholder = {currentLocation}
                        onChange={this.handleOnchange}
                        options={locationOptions}
                        isSearchable={true}
                    />
                    :
                    <div className='location__label' onClick={this.toggleInput}>
                        {currentLocation}
                    </div>
                }
            </div>
        )
    }
}

export default Orderlocation;