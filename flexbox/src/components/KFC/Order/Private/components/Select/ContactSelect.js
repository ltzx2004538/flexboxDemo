import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import './ContactSelect.scss';



class ContactSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false,
        }
        this.onClickCheckbox = this.onClickCheckbox.bind(this);
    }

    onClickCheckbox(){
       this.setState(prevState=>({
           checked: !prevState.checked
       }))
    }

    render() {
        const {checked} = this.state;
        return (
            <div className="contactSelect">
                <div className="contactSelect__title">
                    <span className="contactSelect__title__text">
                        Contacts
                    </span>
                </div>
                <SelectItem checked = {checked}
                            onClick = {this.onClickCheckbox}>
                    Oliver (123@gmail.com)
                </SelectItem>
            </div>
        )

    }
}


export default ContactSelect;