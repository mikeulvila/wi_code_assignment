import axios from 'axios';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';

export function getTodos() {
  const request = axios.get('/api/todos');
  return {
    type: GET_TODOS,
    payload: request
  };
}

export function addTodo() {
  const request = axios.post('/api/todos');
  return {
    type: ADD_TODO,
    payload: request
  };
}


