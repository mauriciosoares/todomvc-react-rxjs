import Rx from 'rx';
import update from 'react-addons-update';
import Immutable from 'immutable';

import todoActions from '../actions/todo';

let store = Immutable.fromJS({
  filter: undefined,
  todos: []
});

let subject = new Rx.BehaviorSubject(store);

todoActions.subjects.add.subscribe((text) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.push({
      id: +new Date(),
      edit: false,
      completed: false,
      text
    });
  });

  subject.onNext(store);
});

todoActions.subjects.delete.subscribe((id) => {
  store = update(store, {
    todos: {
      $apply: todos => todos.filter(todo => todo.id !== id)
    }
  });

  subject.onNext(store);
});

todoActions.subjects.update.subscribe((value) => {
  store = update(store, {
    todos: {
      $apply: todos => {
        return todos.map(todo => {

          if(todo.id === value.id) {
            return {
              ...todo,
              text: value.text
            };
          }

          return todo;
        });
      }
    }
  });

  subject.onNext(store);
});

todoActions.subjects.toggleEdit.subscribe((id) => {
  store = update(store, {
    todos: {
      $apply: todos => {
        return todos.map(todo => {
          if(todo.id === id) {
            return {
              ...todo,
              edit: !todo.edit
            }
          }

          return todo;
        });
      }
    }
  });

  subject.onNext(store);
});

todoActions.subjects.toggleCompleted.subscribe((data) => {
  store = update(store, {
    todos: {
      $apply: todos => {
        return todos.map(todo => {
          if(todo.id === data.id) {
            return {
              ...todo,
              completed: data.completed
            }
          }

          return todo;
        });

      }
    }
  })

  subject.onNext(store);
});

todoActions.subjects.toggleAll.subscribe((allCompleted) => {
  store = update(store, {
    todos: {
      $apply: todos => {
        return todos.map(todo => {
          return {
            ...todo,
            completed: !allCompleted
          }
        });
      }
    }
  });

  subject.onNext(store);
});

todoActions.subjects.clearCompleted.subscribe(() => {
  store = update(store, {
    todos: {
      $apply: todos => todos.filter(todo => !todo.completed)
    }
  });

  subject.onNext(store);
});

todoActions.subjects.filter.subscribe((toFilter) => {
  store = update(store, {
    filter: {
      $set: toFilter
    }
  });

  subject.onNext(store);
});

export default { subject };
