import Rx from 'rx';
import update from 'react-addons-update';
import Immutable from 'immutable';

import todoActions from '../actions/todo';
import todoRecord from '../utils/todoRecord';
import persist from '../utils/persist';


let persistedData = persist.get();

// let store = Immutable.fromJS((persistedData) ? persistedData : {
//   filter: null,
//   todos: []
// }, (key, value) => {
//   return (value.get('id')) ? todoRecord()(value) : value;
// });

// console.log(persistedData);

let store = Immutable.fromJS(persistedData, function(key, value) {
  // console.log(arguments);
  if(value.get('id')) {
    return todoRecord()(value);
  }
  let isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toOrderedMap();

});


let subject = new Rx.BehaviorSubject(store);

subject.subscribe((store) => {
  persist.set(store.toJS());
});

todoActions.subjects.add.subscribe((text) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.push(todoRecord()({
      text
    }));
  });

  subject.onNext(store);
});

todoActions.subjects.delete.subscribe((id) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.filter(todo => todo.id !== id);
  });

  subject.onNext(store);
});

todoActions.subjects.update.subscribe((data) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.map(todo => {
      if(todo.id === data.id) return todo.set('text', data.text);

      return todo;
    });
  });

  subject.onNext(store);
});

todoActions.subjects.toggleEdit.subscribe((id) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.map(todo => {
      if(todo.id === id) return todo.set('edit', !todo.edit);

      return todo;
    });
  });

  subject.onNext(store);
});

todoActions.subjects.toggleCompleted.subscribe((data) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.map(todo => {
      if(todo.id === data.id) return todo.set('completed', data.completed);

      return todo;
    })
  });

  subject.onNext(store);
});

todoActions.subjects.toggleAll.subscribe((allCompleted) => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.map(todo => {
      return todo.set('completed', !allCompleted);
    });
  });

  subject.onNext(store);
});

todoActions.subjects.clearCompleted.subscribe(() => {
  store = store.updateIn(['todos'], (todos) => {
    return todos.filter(todo => !todo.completed);
  });

  subject.onNext(store);
});

todoActions.subjects.filter.subscribe((filter) => {
  store = store.updateIn(['filter'], () => {
    return filter;
  });

  subject.onNext(store);
});

export default { subject };
