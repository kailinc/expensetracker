import React from 'react';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.delete(this.props.id);
  }
  render() {
    let val = this.props.data[1] > 0 ? 'plus' : 'minus';
    // make sure the button works
    // delete from history []
    // delete from balance, income, expense
    return(
      <div className={'transaction ' + val}>
          <div className='left'>
            <p>{this.props.data[0]}</p>
          </div>

          <div className='right'>
            {this.props.data[1] > 0 ?
            <p>${this.props.data[1]}</p> : <p>-${this.props.data[1] * -1}</p> }
            <button onClick={this.handleClick}>x</button>
          </div>

      </div>
    )
  }
}

export default Transaction;
