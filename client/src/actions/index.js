import axios from 'axios';

export const GET_TODOS = 'GET_TODOS';

export function getTodos() {
  console.log('called getTodos');
  const request = axios.get('/api/todos');
  return {
    type: GET_TODOS,
    payload: request
  };
}


