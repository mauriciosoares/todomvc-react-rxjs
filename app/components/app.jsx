import React, {Component} from 'react';

import Header from './Header.jsx';
import Todos from './Todos.jsx';
import Footer from './Footer.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Todos {...this.props} />
        <Footer />
      </div>
    )
  }
}
