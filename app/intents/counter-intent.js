import Rx from 'rx';
import Keys from '../keys/counter-keys';

const intentSubject = new Rx.ReplaySubject(1);

export default {
  subject: intentSubject,

  incrementCounter() {
    intentSubject.onNext({
      key: Keys.INCREMENT_COUNTER
    });
  }
};
