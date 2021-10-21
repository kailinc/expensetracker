import React from 'react';

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h2>Your Balance</h2>
        {this.props.balance >= 0 ?
          <h2 className='plus'>${this.props.balance}</h2> :
          <h2 className='minus'>-${this.props.balance * -1}</h2> }

        <div>
          <h3>INCOME</h3>
          <h3 className='plus'>${this.props.income}</h3>
          <h3>EXPENSE</h3>
          <h3 className='minus'>${this.props.expense}</h3>
        </div>
      </div>
    )
  }
}

export default Dashboard;
