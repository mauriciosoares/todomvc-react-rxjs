import Rx from 'rx';
import update from 'react/lib/update';
import Keys from './keys';
import Intent from './intent';

let subject = new Rx.ReplaySubject(1);

// the state of the application
let state = {
  counter: 0
};

function incrementCounter() {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });

  // this guy triggers the subscription in the main.jsx file
  subject.onNext(state);
}

// this subscription is triggered whenever
// the user clicks in the button, in the Root element
Intent.subject.subscribe((payload) => {
  // payload comes from the keys in the intent.js file
  switch (payload.key) {
    case Keys.INCREMENT_COUNTER:
      incrementCounter();
      break;

    default:
      console.warn(`${payload.key} not recognized in model.`);
  }
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
subject.onNext(state);

export default { subject };
