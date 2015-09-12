import React from 'react';
import Rx from 'rx';
import Model from './model';
import Root from './views/root.jsx';

Model.subject.subscribe((appState) => {
  React.render(<Root {...appState} />, document.getElementById('app'));
});
