import React, {Component} from 'react';

import todoActions from '../actions/todo';
import TextInput from './TextInput.jsx';

import keys from '../utils/keys';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TextInput
          className="new-todo"
          placeholder="What needs to be done?"
          ref="input"
          onKeyUp={::this.add} />
      </header>
    )
  }

  add(event) {
    let domNode = React.findDOMNode(this.refs.input);

    if(event.which !== keys.ENTER || !domNode.value) return;

    todoActions.add(domNode.value);
    domNode.value = '';
  }
}
