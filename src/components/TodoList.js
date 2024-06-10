import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from '../redux/actions/todoActions';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';

const TodoList = ({ todos, loading, error, fetchTodos, addTodo, deleteTodo, toggleTodo }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = useCallback(() => {
    const newTodo = { text: 'New To-Do', completed: false };
    addTodo(newTodo);
  }, [addTodo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <ul>
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))}
        </AnimatePresence>
      </ul>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={handleAddTodo}
      >
        Add To-Do
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  loading: state.todos.loading,
  error: state.todos.error,
});

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
