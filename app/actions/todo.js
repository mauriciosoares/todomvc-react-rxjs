import Rx from 'rx';

const subjects = {
  add: new Rx.Subject(),
  delete: new Rx.Subject(),
  update: new Rx.Subject(),
  toggle: new Rx.Subject()
};

export default {
  subjects,

  add(item) {
    subjects.add.onNext(item);
  },

  delete(id) {
    subjects.delete.onNext(id);
  },

  update(id, text) {
    subjects.update.onNext({ id, text });
  },

  toggle(id) {
    subjects.toggle.onNext(id);
  }
};
