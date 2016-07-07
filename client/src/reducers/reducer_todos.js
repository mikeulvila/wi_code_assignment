import { GET_TODOS } from '../actions/index';

const INITIAL_STATE = { todos: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload.data };

    default:
      return state;
  }
}
