import './App.css';
import React from 'react';
import Dashboard from './Dashboard.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      history: [],
      balance: 0,
      income: 0,
      expense:0
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Expense Tracker</h1>
        <Dashboard
          balance={this.state.balance}
          income={this.state.income}
          expense={this.state.expense}/>
      </div>
    )
  }
}


export default App;
