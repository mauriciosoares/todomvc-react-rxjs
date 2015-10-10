import React, {Component} from 'react';

import todoActions from '../actions/todo';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        {this.renderClearCompleted()}
      </footer>
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
