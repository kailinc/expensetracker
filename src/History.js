import React from 'react';

class History extends React.Component {
  render() {
    let data = this.props.history;
    return(
      <div>
        <h3>History</h3>
        {data.length > 0 ? data : <p>No transactions</p>}
      </div>
    )
  }
}
export default History;
