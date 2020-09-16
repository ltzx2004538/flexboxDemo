import React from 'react';
import "./MenuManager.scss";




class MenuManager extends React.Component {
  constructor(props) {
    super(props);
    const defaultVolume = this.props.volume;
    this.state = {
      volume: defaultVolume,
      active: false,
    }

    this.toggleInput = this.toggleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleOnchange(e) {
    this.updateDisplay(e.target.value);
  }

  updateDisplay(inputVolume) {
    this.setState({
      volume: inputVolume
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onVolumeChange(this.props.itemKey, this.state.volume);
    this.toggleInput();
  }

  handleBlur(e) {
    this.updateDisplay(this.props.volume);
    this.toggleInput();
  }

  handleFocus(e) {

  }


  toggleInput() {
    this.setState({
      active: !this.state.active,
    });
    console.log("trigger active" + this.state.active);
  }

  render() {
    const {volume, active} = this.state;
    return (
      <div className="menuWrapper">
        <div className="menuLabel">
          {this.props.menuItem}
        </div>
        <div className="itemVolume">
          {!active ?
            <div onClick={this.toggleInput}>
              {this.props.volume}
            </div>
            :
            <form className='Country__form'
              onSubmit={this.handleSubmit}
            >
              <input className='itemVolume__input'
                onChange={this.handleOnchange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                value={volume}
              />
            </form>
          }
        </div>
        <div className="menuButton">
          <button className='soldOut'
            onClick={(event) => {
              event.preventDefault();
              this.props.onClickSoldOut();
            }}
          > sold out</button>
        </div>
      </div>

    )
  }
}



export default MenuManager;