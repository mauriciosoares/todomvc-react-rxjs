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
        <input ref="input" onKeyUp={::this.submit} />
        <div>
          {
            this.props.todos.map(todo => {
              return (
                <div key={+new Date()}>{todo.text}</div>
              )
            })
          }
        </div>
      </div>
    )
  }

  submit(event) {
    if(event.which !== 13 || !this.refs.input.getDOMNode().value) return;
    todoActions.add(this.refs.input.getDOMNode().value);

    this.refs.input.getDOMNode().value = '';
  }
}
