import Rx from 'rx';
import Keys from '../keys/yahharo-keys';

const intentSubject = new Rx.ReplaySubject(1);

export default {
  subject: intentSubject,

  switchGreeting() {
    intentSubject.onNext({
      key: Keys.SWITCH_GREETING
    });
  }
};
