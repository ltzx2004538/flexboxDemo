import React from 'react';
import './OrderLocation.scss';




class Orderlocation extends React.Component {
    constructor(props) {
        super(props);
        this.options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]
          
        this.defaultText = 'input your location';
        this.locationInput = React.createRef();
        this.state = {
            currentLocation: this.defaultText,
            active: false,
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
        this.getFocus = this.getFocus.bind(this);
    }

    toggleInput() {
        this.setState({
            active: !this.state.active,
        });
    }

    getFocus(){
        this.locationInput.current.focus(); 
        this.toggleInput();
    }

    handleOnchange(e) {
        this.updateDisplay(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleInput();
    }

    handleOnFocus(e) {
        if (this.state.currentLocation === this.defaultValue) {
            this.updateDisplay('');
        }
    }

    handleOnBlur(e) {
        if (this.state.currentLocation === '') {
            this.updateDisplay(this.defaultValue);
            console.log("updated");
        }
        this.toggleInput();
    }

    updateDisplay(inputValue) {
        this.setState({
            currentLocation: inputValue,
        });
    }



    render() {
        const { active, currentLocation } = this.state;
        return (
            <div className='location'>
                {active ?
                    <form className='location__form'
                          onSubmit={this.handleSubmit}
                    >
                        <input ref={this.locationInput} className='location__input'
                            onChange={this.handleOnchange}
                            onFocus={this.handleOnFocus}
                            onBlur={this.handleOnBlur}
                            value={currentLocation}
                        />
                    </form>
                    :
                    <div className='location__label'onClick = {this.toggleInput}>
                        {currentLocation}
                    </div>
                }
                
            </div>
        )
    }
}

export default Orderlocation;