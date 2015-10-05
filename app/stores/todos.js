import Rx from 'rx';

import todoActions from '../actions/todo';

let todos = [];

let subject = new Rx.BehaviorSubject(todos);

todoActions.subjects.add.subscribe((text) => {
  todos.push({
    id: +new Date(),
    text
  });

  subject.onNext(todos);
});

todoActions.subjects.delete.subscribe((id) => {
  todos = todos.filter(todo => todo.id !== id);

  subject.onNext(todos);
});

todoActions.subjects.update.subscribe((updates) => {
  todos = todos.map(todo => {
    if(todo.id === updates.id) todo.text = updates.text;

    return todo;
  });

  subject.onNext(todos);
});

export default { subject };
