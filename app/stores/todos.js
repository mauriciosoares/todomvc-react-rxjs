import Rx from 'rx';

import todoActions from '../actions/todo';

let todos = [];

let subject = new Rx.BehaviorSubject(todos);

todoActions.subjects.add.subscribe((text) => {
  todos = [...todos, {
    id: +new Date(),
    edit: false,
    text
  }];

  subject.onNext(todos);
});

todoActions.subjects.delete.subscribe((id) => {
  todos = todos.filter(todo => todo.id !== id);

  subject.onNext(todos);
});

todoActions.subjects.update.subscribe((updates) => {
  todos = todos.map(todo => {

    if(todo.id === updates.id) {
      return {
        ...todo,
        text: updates.text
      };
    }

    return todo;
  });

  subject.onNext(todos);
});

todoActions.subjects.edit.subscribe((updates) => {
  todos = todos.map(todo => {
    if(todo.id === updates.id) todo.edit = updates.edit;

    return todo;
  });

  subject.onNext(todos);
});

export default { subject };
