import React, {Component} from 'react';

export default class TextInput extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input {...this.props} />
    )
  }
};
