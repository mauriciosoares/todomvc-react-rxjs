import React, {Component} from 'react';
import ItemsLeft from './ItemsLeft.jsx';

import todoActions from '../actions/todo';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.renderFooter();
  }

  renderFooter() {
    if(!this.props.todos.length) return null;
    return (
      <footer className="footer">
        <ItemsLeft length={this.props.todos.filter(todo => !todo.completed).length} />
        {this.renderClearCompleted()}
      </footer>
    )
  }

  renderClearCompleted() {
    if(this.props.todos.filter(todo => todo.completed).length > 0) {
      return (
        <button
          className="clear-completed"
          onClick={this.clearCompleted}>Clear completed</button>
      )
    }
  }

  clearCompleted() {
    todoActions.clearCompleted();
  }
}
