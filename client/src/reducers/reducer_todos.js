import { GET_TODOS } from '../actions/index';
import { ADD_TODO } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  console.log('reducer state: ', state);
  console.log('recucer action', action);
  switch (action.type) {
    case GET_TODOS:
      console.log('GET_TODOS REDUCER');
      return { ...state, all: action.payload.data.todos };

    case ADD_TODO:
      console.log('action ADD_TODO reducer: ', action);
      let todos = state.all;
      const newTodo = action.payload.data.todos;
      todos.push(newTodo);
      return { ...state, all: todos };

    default:
      console.log('DEFAULT REDUCER');
      return state;
  }
}
