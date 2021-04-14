import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.props.handleClick = this.props.handleClick.bind(this);
  }

  render() {
    return <button onClick={this.props.handleClick}>{this.props.buttonText}</button>;
  }
}

export default Button;
