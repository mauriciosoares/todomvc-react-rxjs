import React from 'react';
import intent from '../intent';

class Root extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }

  incrementCounter() {
    // this triggers the intent method...
    // which than triggers the model subscription,
    // and then reloads the app in the main.jsx
    // subscription
    intent.incrementCounter();
  }
};

export default Root;
