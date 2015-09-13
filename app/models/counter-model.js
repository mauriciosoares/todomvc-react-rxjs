import Rx from 'rx';
import update from 'react/lib/update';
import CounterKeys from '../keys/counter-keys.js';
import Intent from '../intents/counter-intent.js';

// the state of the application
let state = {
  counter: 0,
  list: [],
  filterEvens: true
};

let subject = new Rx.BehaviorSubject(state);

// this subscription is triggered whenever
// the user clicks in the button, in the Root element
Intent.subjects.incrementCounterSubject.subscribe((payload) => {
  state = update(state, {
    $merge: {
      counter: state.counter + 1,
      list: state.list.concat(state.counter)
    }
  });

  // this guy triggers the subscription in the main.jsx file
  subject.onNext(state);
});

// this line triggers the first state of the application
// we used RepalySubject because the subscription was made
// AFTER the first onNext method was called.
//
// Also since the ReplaySubject() received 1 as parameter,
// only the last `onNext` method would be called.
// This parameter is a buffer of items that would be called.
//
// [https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md]
// subject.onNext(state);

export default { subject };
