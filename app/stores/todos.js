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

todoActions.subjects.update.subscribe((value) => {
  todos = todos.map(todo => {

    if(todo.id === value.id) {
      return {
        ...todo,
        text: value.text
      };
    }

    return todo;
  });

  subject.onNext(todos);
});

todoActions.subjects.toggle.subscribe((id) => {
  todos = todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo,
        edit: !todo.edit
      }
    }

    return todo;
  });

  subject.onNext(todos);
});

export default { subject };
