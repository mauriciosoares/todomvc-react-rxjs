import React from 'react';
import CounterIntent from '../intents/counter-intent.js';
import YahharoIntent from '../intents/yahharo-intent.js';

class Root extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>{this.props.YahharoState.greeting}</div>
        <button onClick={this.switchGreeting}>Switch Greeting</button>

        <br />

        <div>{this.props.CounterState.counter}</div>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }

  incrementCounter() {
    // this triggers the intent method...
    // which than triggers the model subscription,
    // and then reloads the app in the main.jsx
    // subscription
    CounterIntent.incrementCounter();
  }

  switchGreeting() {
    YahharoIntent.switchGreeting();
  }
};

export default Root;
