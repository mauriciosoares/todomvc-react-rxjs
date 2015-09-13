import Rx from 'rx';
import Keys from '../keys/counter-keys';

const subjects = {
  incrementCounterSubject: new Rx.Subject()
};

export default {
  subjects,

  incrementCounter() {
    subjects.incrementCounterSubject.onNext();
  }
};
