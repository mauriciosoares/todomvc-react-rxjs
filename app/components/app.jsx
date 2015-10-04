import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <input ref="input" onKeyUp={::this.test} />
      </div>
    )
  }

  test() {
    console.log(this.refs.input.getDOMNode().value);
  }
}
