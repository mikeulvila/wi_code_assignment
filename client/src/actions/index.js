import axios from 'axios';

export const GET_TODOS = 'GET_TODOS';

const ROOT_URL = 'http://localhost:3000/api';

export function getTodos() {
  console.log('called getTodos');
  const request = axios.get(`${ROOT_URL}/todos`);
  return {
    type: GET_TODOS,
    payload: request
  };
}


