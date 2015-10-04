import React, {Component} from 'react';
import Todos from './Todos.jsx'

import todoActions from '../actions/todo'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input ref="input" onKeyUp={::this.add} />
        <Todos {...this.props} />
      </div>
    )
  }

  add(event) {
    if(event.which !== 13 || !this.refs.input.getDOMNode().value) return;
    todoActions.add(this.refs.input.getDOMNode().value);

    this.refs.input.getDOMNode().value = '';
  }
}
