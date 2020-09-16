import React from 'react';
import "./FlexDemo.scss"


class FlexDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const newState = !this.state.active
        this.setState({
            active: newState,
        })
    }



    render() {
        const active = this.state.active;
        return (
            <React.Fragment>
            <div className="container">
                <div className="leftDiv">
                    <span>left</span>
                </div>
                {active ?
                    <div className="rightDiv-short">
                        <span>right</span>
                    </div>
                    :
                    <div className="rightDiv-long">
                        <span>right</span>
                    </div>
                }
            </div>
             <button onClick={(event)=>{
                 event.preventDefault();
                 this.handleClick();
             }}>change length</button>
             </React.Fragment>
        );
    }





}

export default FlexDemo;