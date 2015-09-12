import Rx from 'rx';
import update from 'react/lib/update';

import YahharoKeys from '../keys/yahharo-keys';
import YahharoIntent from '../intents/yahharo-intent';

let subject = new Rx.ReplaySubject(1);

const yahharo = 'やっはろー';
const haroharo = 'はろはろー';

let state = {
  greeting: yahharo
};

function switchGreeting() {
  state = update(state, {
    $merge: {
      greeting : state.greeting === yahharo ? haroharo : yahharo
    }
  });

  subject.onNext(state);
}

YahharoIntent.subject.subscribe((payload) => {
  switch(payload.key) {
    case YahharoKeys.SWITCH_GREETING:
      switchGreeting();
      break;

    default:
      console.warn(`${payload.key} not recognized in model.`);
  }
});

subject.onNext(state);

export default { subject };
