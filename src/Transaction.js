import React from 'react';
import format from './format.js';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.delete(this.props.id);
  }
  render() {
    let amount = format(this.props.data[1])
    let val = this.props.data[1] > 0 ? 'plus' : 'minus';
    return(
      <div className={'transaction ' + val}>
          <div>
            <p>{this.props.data[0]}</p>
          </div>

          <div>
            <p>{amount}</p>
            <button onClick={this.handleClick}>Remove</button>
          </div>
      </div>
    )
  }
}

export default Transaction;
