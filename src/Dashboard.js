import React from 'react';
import format from './format.js'

class Dashboard extends React.Component {
  render() {
    let balance = format(this.props.balance);
    let income = format(this.props.income);
    let expense = format(this.props.expense);


    return(
      <div>
        <h2>YOUR BALANCE</h2>

        <h2>{balance}</h2>
        <div className="summary">
          <div>
            <h4>INCOME</h4>
            <h4 className='plus'>{income}</h4>
          </div>
          <div>
          <h4>EXPENSE</h4>
          <h4 className='minus'>{expense}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
