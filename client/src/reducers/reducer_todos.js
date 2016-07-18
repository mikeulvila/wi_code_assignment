import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/index';

const INITIAL_STATE = { all: [], message: 'This is a message!' };

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_TODOS:
      return { ...state, all: action.payload.data.todos, message: 'Got all dem todos' };

    case ADD_TODO:
      let todos = state.all;
      const newTodo = action.payload.data.todos;

      return { ...state, all: [ ...todos, newTodo ], message: 'You just added more stuff todo!' };

    case UPDATE_TODO:
      return { ...state, message: action.payload.data.message }

    case DELETE_TODO:
      return { ...state, message: action.payload.data.message }

    default:
      return state;
  }

}
