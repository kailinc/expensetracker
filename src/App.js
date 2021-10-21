import './App.css';
import React from 'react';

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
        <h1>Hello</h1>
      </div>
    )
  }
}


export default App;
