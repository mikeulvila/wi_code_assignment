import { combineReducers } from 'redux';
import todosReducer from './reducer_todos';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  todos: todosReducer,
  form: formReducer
});

export default rootReducer;
