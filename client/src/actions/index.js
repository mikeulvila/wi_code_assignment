import axios from 'axios';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function getTodos() {
  const request = axios.get('/api/todos');
  return {
    type: GET_TODOS,
    payload: request
  };
}

export function addTodo(todo) {
  console.log('todo in action creator: ', todo);
  const request = axios.post('/api/todos', todo);
  return {
    type: ADD_TODO,
    payload: request
  };
}

export function updateTodo(todo) {
  const id = todo._id;
  const request = axios.put(`/api/todos/${id}`, todo);
  return {
    type: UPDATE_TODO,
    payload: request
  };
}

export function deleteTodo(id) {
  const request = axios.delete(`/api/todos/${id}`);
  return {
    type: DELETE_TODO,
    payload: request
  };
}


