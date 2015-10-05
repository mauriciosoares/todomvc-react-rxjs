import React, {Component} from 'react';
import TextInput from './TextInput.jsx';

import todoActions from '../actions/todo';

import keys from '../utils/keys';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  render() {
    return (this.state.isEditing) ? this.renderEdit() : this.renderText();
  }

  renderText() {
    return (
      <div>
        <span onDoubleClick={::this.edit}>{this.props.text}</span>
        <a href="#" onClick={::this.delete}>X</a>
      </div>
    )
  }

  renderEdit() {
    return (
      <div>
        <TextInput onKeyUp={::this.update} onBlur={::this.unEdit} ref="input" defaultValue="aslkdfj" autoFocus />
      </div>
    )
  }

  edit() {
    this.setState({ isEditing: true });
  }

  unEdit() {
    this.setState({ isEditing: false });
  }

  delete() {
    todoActions.delete(this.props.id);
  }

  update(event) {
    if(event.which === keys.ESC) return this.unEdit();

    let domNode = React.findDOMNode(this.refs.input);
    if(event.which !== 13 || !domNode.value) return;


    this.unEdit();

    todoActions.update(this.props.id, domNode.value);
    domNode.value = '';
  }
}
