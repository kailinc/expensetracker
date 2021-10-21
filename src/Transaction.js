import React from 'react';

class Transaction extends React.Component {
  render() {
    return(
      <li key={this.props.key}>{this.props.data}</li>
    )
  }
}

export default Transaction;
