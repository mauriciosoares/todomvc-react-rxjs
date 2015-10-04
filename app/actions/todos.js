import Rx from 'rx';

const actions = {
  add: new Rx.Subject()
};

export default {
  actions,

  add(item) {
    actions.add.onNext(item);
  }
};
