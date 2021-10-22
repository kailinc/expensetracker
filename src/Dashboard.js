import React from 'react';

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h2>YOUR BALANCE</h2>
        {this.props.balance >= 0 ?
          <h2 className='plus'>${this.props.balance}</h2> :
          <h2 className='minus'>-${this.props.balance * -1}</h2> }

        <div className="summary">
          <div>
            <h4>INCOME</h4>
            <h4 className='plus'>${this.props.income}</h4>
          </div>
          <div>
          <h4>EXPENSE</h4>
          <h4 className='minus'>${this.props.expense}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
