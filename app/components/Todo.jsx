import React, {Component} from 'react';
import TextInput from './TextInput.jsx';

import todoActions from '../actions/todo';
import keys from '../utils/keys';
import classNames from 'classnames';

export default class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={classNames({'completed': this.props.completed})}>
        {(this.props.edit) ? this.renderEdit() : this.renderText()}
      </li>
    )
  }

  renderText() {
    return (
      <div className="view">
        <input
          onChange={::this.toggleCompleted}
          ref="checkbox"
          type="checkbox"
          checked={(this.props.completed) ? 'checked' : ''}
          className="toggle" />

        <label onDoubleClick={::this.toggleEdit}>{this.props.text}</label>
        <button
          className="destroy"
          onClick={::this.delete}></button>
      </div>
    )
  }

  toggleCompleted() {
    todoActions.toggleCompleted(this.props.id, this.refs.checkbox.getDOMNode().checked);
  }

  renderEdit() {
    return (
      <li>
        <TextInput
          onKeyUp={::this.update}
          onBlur={::this.toggleEdit}
          ref="input"
          defaultValue={this.props.text}
          autoFocus />
      </li>
    )
  }

  toggleEdit() {
    todoActions.toggleEdit(this.props.id);
  }

  delete() {
    todoActions.delete(this.props.id);
  }

  update(event) {
    if(event.which === keys.ESC) return this.toggleEdit();

    let domNode = React.findDOMNode(this.refs.input);
    if(event.which !== 13 || !domNode.value) return;


    this.toggleEdit();

    todoActions.update(this.props.id, domNode.value);
    domNode.value = '';
  }
}
