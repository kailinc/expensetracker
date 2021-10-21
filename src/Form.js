import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      caption: '',
      amount: 0
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      caption: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>Add New Transaction</h1>
        <form>
          <h3>Caption</h3>
          <input type='text' placeholder='Enter Your Caption Here'value={this.state.caption} onChange={this.handleTextChange}/>
          <h3>Amount</h3>
          <p>Negative is expense. Positive is income</p>
          <input type='number' value={this.state.amount}/>
          <input type='button'/>
        </form>
      </div>
    );
  }
}

export default Form;
