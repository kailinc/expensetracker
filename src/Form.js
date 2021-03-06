import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      caption: '',
      amount: 0
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      caption: e.target.value
    })
  }

  handleNumChange(e) {
    this.setState({
      amount: e.target.value
    })
  }

  handleSubmit() {
    if (this.state.amount === 0) {
      alert('Amout must not be 0!');
    } else if (this.state.caption.length === 0) {
      alert('You must have caption!');
    }
    else  {
      this.props.onSubmit(this.state);
      this.setState({
        caption: '',
        amount:0
      })
    }
  }

  render() {
    return(
      <div>
        <h3>Add New Transaction</h3>
        <form>
          <h4>Caption</h4>
          <input
            type='text'
            placeholder='Enter Your Caption Here'
            value={this.state.caption}
            onChange={this.handleTextChange}/>

          <h4>Amount</h4>
          <p>Negative is expense. Positive is income</p>
          <input
            type='number'
            value={this.state.amount}
            onChange={this.handleNumChange}
            step="0.01"
            placeholder="0.00"/>

          <input
            type='button'
            value='Add Transaction'
            onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default Form;
