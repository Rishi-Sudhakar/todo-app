// src/components/TodoItem.js
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const TodoItem = memo(({ todo, toggleTodo, deleteTodo }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2"
    >
      <span
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </motion.li>
  );
});

export default TodoItem;
