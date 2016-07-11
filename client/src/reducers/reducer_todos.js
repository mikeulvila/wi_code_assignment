import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_TODOS:
      return { ...state, all: action.payload.data.todos };

    case ADD_TODO:
      let todos = state.all;
      const newTodo = action.payload.data.todos;
      todos.push(newTodo);
      return { ...state, all: todos };

    case UPDATE_TODO:

    default:
      return state;
  }

}
