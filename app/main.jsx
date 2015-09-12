import React from 'react';
import Rx from 'rx';

import YahharoModel from './models/yahharo-model';
import CounterModel from './models/counter-model';
import Root from './views/root.jsx';

var AppObservable = Rx.Observable.combineLatest(
  CounterModel.subject,
  YahharoModel.subject,

  (CounterState, YahharoState) => {
    return {
      CounterState,
      YahharoState
    };
  }
);

AppObservable.subscribe((appState) => {
  React.render(<Root {...appState} />, document.getElementById('app'));
});
