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
        {this.renderToggleAll()}
        <TextInput ref="input" onKeyUp={::this.add} />
      </div>
    )
  }

  renderToggleAll() {
    if(this.props.todos.length > 0) {
      let allCompleted = (this.props.todos.filter(todo => todo.completed).length === this.props.todos.length);

      return (
        <a href="#" onClick={this.toggleAll.bind(this, allCompleted)}>Toggle all</a>
      );
    }
  }

  toggleAll(allCompleted) {
    todoActions.toggleAll(allCompleted);
  }

  add(event) {
    let domNode = React.findDOMNode(this.refs.input);

    if(event.which !== keys.ENTER || !domNode.value) return;

    todoActions.add(domNode.value);
    domNode.value = '';
  }
}
