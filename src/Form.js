import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
        <h1>Add New Transaction</h1>
        <form>
          <h3>Caption</h3>
          <input type='text'/>
          <h3>Amount</h3>
          <p>Negative is expense. Positive is income</p>
          <input type='number'/>
          <input type='button'/>
        </form>
      </div>
    );
  }
}

export default Form;
