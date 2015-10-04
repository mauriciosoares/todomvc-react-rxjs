import React, {Component} from 'react';

import todoActions from '../actions/todo'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <input ref="input" onKeyUp={::this.add} />
        <div>
          {
            this.props.todos.map(todo => {
              return (
                <div onClick={this.delete.bind(this, todo.id)} key={todo.id}>{todo.text}</div>
              )
            })
          }
        </div>
      </div>
    )
  }

  add(event) {
    if(event.which !== 13 || !this.refs.input.getDOMNode().value) return;
    todoActions.add(this.refs.input.getDOMNode().value);

    this.refs.input.getDOMNode().value = '';
  }

  delete(id) {
    todoActions.delete(id);
  }
}
