import React, {Component} from 'react';

import todoActions from '../actions/todo';

export default class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.text}
        <a href="#" onClick={::this.delete}>X</a>
      </div>
    )
  }

  delete(id) {
    todoActions.delete(this.props.id);
  }
}
