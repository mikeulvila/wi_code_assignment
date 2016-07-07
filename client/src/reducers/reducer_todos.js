import { GET_TODOS } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  console.log('reducer called, action: ', action);
  switch (action.type) {
    case GET_TODOS:
      return { ...state, all: action.payload.data.todos };

    default:
      return state;
  }
}
