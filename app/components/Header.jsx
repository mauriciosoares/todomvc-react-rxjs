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
      <div>
        <TextInput ref="input" onKeyUp={::this.add} />
      </div>
    )
  }

  add(event) {
    let domNode = React.findDOMNode(this.refs.input);

    if(event.which !== keys.ENTER || !domNode.value) return;

    todoActions.add(domNode.value);
    domNode.value = '';
  }
}
