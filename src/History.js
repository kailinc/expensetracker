import React from 'react';
import Transaction from './Transaction.js';


class History extends React.Component {
  constructor(props) {
    super(props);
    this.renderHistory = this.renderHistory.bind(this);
  }

  renderHistory() {
    let history = this.props.history;
    let listItems = history.map((i,k) =>
      <Transaction data={i} key={k}/>
    );
    return (<div className="history">{listItems}</div>);
  }

  render() {
    let data = this.props.history;
    let history = this.renderHistory();
    return(
      <div>
        <h3>History</h3>
        {data.length > 0 ? history : <p>No transactions</p>}
      </div>
    )
  }
}
export default History;
