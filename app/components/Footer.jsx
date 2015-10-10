import React, {Component} from 'react';

import todoActions from '../actions/todo';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.renderClearCompleted()}
      </div>
    )
  }

  renderClearCompleted() {
    if(this.props.todos.filter(todo => todo.completed).length > 0) {
      return (
        <a href="#" onClick={this.clearCompleted}>Clear completed</a>
      )
    }
  }

  clearCompleted() {
    todoActions.clearCompleted();
  }
}
