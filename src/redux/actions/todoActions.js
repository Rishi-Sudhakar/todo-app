// src/redux/actions/todoActions.js
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001'; // Set the base URL for axios

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  try {
    const response = await axios.get('/todos');
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_TODOS_FAILURE, error });
  }
};

export const addTodo = (todo) => async (dispatch) => {
  const response = await axios.post('/todos', todo);
  dispatch({ type: ADD_TODO, payload: response.data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
};

export const toggleTodo = (id) => async (dispatch) => {
  const response = await axios.patch(`/todos/${id}`);
  dispatch({ type: TOGGLE_TODO, payload: response.data });
};
