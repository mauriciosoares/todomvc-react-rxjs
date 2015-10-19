import React, {Component} from 'react';
import Count from './Count.jsx';
import Filter from './Filter.jsx';
import ClearCompleted from './ClearCompleted.jsx';

import todoActions from '../actions/todo';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.todos.size) return null;

    return (
      <footer className="footer">
        <Count length={this.props.todos.filter(todo => !todo.completed).size} />
        <Filter filter={this.props.filter} />
        <ClearCompleted todos={this.props.todos} />
      </footer>
    );
  }
}
