import React, {Component} from 'react';
import Count from './Count.jsx';
import Filter from './Filter.jsx';

import todoActions from '../actions/todo';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillUpdate() {
  //   this.todosSize =
  // }

  render() {
    return this.renderFooter();
  }

  renderFooter() {
    if(!this.props.todos.size) return null;
    return (
      <footer className="footer">
        <Count length={this.props.todos.filter(todo => !todo.completed).size} />
        <Filter filter={this.props.filter} />
        {this.renderClearCompleted()}
      </footer>
    )
  }

  renderClearCompleted() {
    if(this.props.todos.filter(todo => todo.completed).size > 0) {
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
