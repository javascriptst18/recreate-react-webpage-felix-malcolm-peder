import React, { Component } from 'react';
import Button from './Button';

class ButtonContainer extends Component {
  state = {
    counter: 0
  }

  handleClickPlus = () => {
    this.setState({counter: this.state.counter + 1});
  }

  handleClickMinus = () => {
    this.setState({counter: this.state.counter - 1});
  }
  
  render() {
    return(
      <div className="Btn-wrapper">
        <p className="Counter">{this.state.counter}</p>
        <Button className="Btn pink" onClick={this.handleClickPlus} title="Increase"/>
        <Button className="Btn purple" onClick={this.handleClickMinus} title="Decrease"/>
      </div>
    )
  }
}

export default ButtonContainer;