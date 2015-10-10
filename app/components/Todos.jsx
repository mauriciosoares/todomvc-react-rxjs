import React, {Component} from 'react';
import Todo from './Todo.jsx';

import todoActions from '../actions/todo';

export default class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main">
        {this.renderToggleAll()}
        <ul className="todo-list">
          {
            this.props.todos.map(todo => {
              return (
                <Todo key={todo.id} {...todo} />
              )
            })
          }
        </ul>
      </section>
    )
  }

  renderToggleAll() {
    if(this.props.todos.length > 0) {
      let allCompleted = (this.props.todos.filter(todo => todo.completed).length === this.props.todos.length);

      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={allCompleted}
          onChange={this.toggleAll.bind(this, allCompleted)} />
      );
    }
  }

  toggleAll(allCompleted) {
    todoActions.toggleAll(allCompleted);
  }
}
