import Rx from 'rx';

const subjects = {
  add: new Rx.Subject(),
  delete: new Rx.Subject()
};

export default {
  subjects,

  add(item) {
    subjects.add.onNext(item);
  },

  delete(id) {
    subjects.delete.onNext(id);
  }
};
