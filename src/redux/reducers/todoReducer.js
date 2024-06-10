// src/redux/reducers/todoReducer.js
import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
  } from '../actions/todoActions';
  
  const initialState = {
    loading: false,
    todos: [],
    error: null,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TODOS_SUCCESS:
        return {
          ...state,
          loading: false,
          todos: action.payload,
        };
      case FETCH_TODOS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  