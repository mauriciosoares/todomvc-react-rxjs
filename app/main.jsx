import Rx from 'rx';
import React from 'react';

import todosStore from './stores/todos';

import App from './components/App.jsx';

todosStore.subject.subscribe((store) => {
  React.render(<App todos={store} />, document.getElementById('app'));
})

