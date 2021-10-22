import './App.css';
import React from 'react';
import Dashboard from './Dashboard.js';
import History from './History.js';
import Form from './Form.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      history: [],
      balance: 0,
      income: 0,
      expense:0
    })
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    let item = this.state.history[id];

    let copy = [...this.state.history];
    let resHistory = copy.filter((ele, idx) => idx !== id);

    let resBalance = this.state.balance - item[1];
    let resIncome = item[1] > 0 ? this.state.income - item[1] : this.state.income;
    let resExpense = item[1] < 0 ? this.state.expense + item[1] : this.state.expense;

    this.setState({
      history: resHistory,
      balance: resBalance,
      income: resIncome,
      expense: resExpense
    })

  }

  handleSubmit(data) {
    let trans = [data['caption'], parseFloat(data['amount'])];
    let resHistory = [...this.state.history];
    resHistory.push(trans);

    let resBalance = this.state.balance + trans[1];
    let resIncome = trans[1] > 0 ? this.state.income + trans[1]: this.state.income;
    let resExpense = trans[1] < 0 ? this.state.expense - trans[1]: this.state.expense;

    this.setState({
      history: resHistory,
      balance: resBalance,
      income: resIncome,
      expense: resExpense
    });


  }

  render() {
    return(
      <div className="App">
        <h1>Expense Tracker</h1>
        <Dashboard
          balance={this.state.balance}
          income={this.state.income}
          expense={this.state.expense}/>
        <History history={this.state.history} onDelete={this.handleDelete}/>
        <Form onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}


export default App;
