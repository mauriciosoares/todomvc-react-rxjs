import Immutable from 'immutable';

export default Immutable.Record({
  id: +new Date(),
  edit: false,
  completed: false,
  text: ''
});
