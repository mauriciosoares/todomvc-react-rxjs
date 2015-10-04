import Rx from 'rx';

import todoActions from '../actions/todo';

let todos = [];

let subject = new Rx.BehaviorSubject(todos);

todoActions.subjects.add.subscribe((text) => {
  todos.push({
    text
  });

  subject.onNext(todos);
});

export default { subject };
