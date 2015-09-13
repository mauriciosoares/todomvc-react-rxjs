import React from 'react';
import update from 'react/lib/update';
import Rx from 'rx';

// import YahharoModel from './models/yahharo-model';
import CounterModel from './models/counter-model';
import Root from './views/root.jsx';

// var AppObservable = Rx.Observable.combineLatest(
//   CounterModel.subject,
//   YahharoModel.subject,

//   (CounterState, YahharoState) => {
//     return {
//       CounterState,
//       YahharoState
//     };
//   }
// );

// AppObservable.subscribe((appState) => {
//   React.render(<Root {...appState} />, document.getElementById('app'));
// });

var FilteredObservable = CounterModel.subject.map((appState) => {
  var filteredList = appState.list.filter((item) => {
    var isEven = item % 2 === 0;
    return appState.filterEvens ? !isEven : isEven;
  });

  return update(appState, {
    $merge: { filteredList }
  });
});

FilteredObservable.subscribe((appState) => {
  React.render(<Root {...appState} />, document.getElementById('app'));
});
