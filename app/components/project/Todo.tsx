'use client';
import React, { useState } from 'react';

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [show, setShow] = useState<boolean>(true);

  // ✅ Fixed show/hide logic
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  // Handle input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Add or Update task
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo: TodoType = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInput('');
  };

  // Delete task
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle complete
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit task
  const handleEdit = (todo: TodoType) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  // Clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="flex justify-center items-center min-h-screen">

      {/* ✅ Show / Hide Todo App */}
      {show && (
        <div className="bg-indigo-600 text-white p-6 rounded-md max-w-md mx-auto mt-10">
          <h1 className="text-center my-2 text-3xl text-pink-300 font-bold">
            Todo App
          </h1>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-white rounded-md p-4 mb-4"
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter task..."
              className="bg-gray-100 rounded p-2 m-2 text-gray-900 w-2/3"
            />
            <button className="bg-green-800 px-4 py-2 rounded hover:bg-green-600">
              {editId !== null ? 'Update' : 'Add'}
            </button>
          </form>

          {/* Stats */}
          <div className="flex justify-between text-sm mb-3">
            <span>Active: {activeCount}</span>
            <span>Completed: {completedCount}</span>
          </div>

          {/* List */}
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center border border-white rounded p-2 hover:bg-gray-700 transition"
              >
                <span
                  onClick={() => handleToggle(todo.id)}
                  className={`cursor-pointer ${
                    todo.completed ? 'line-through text-gray-300' : ''
                  }`}
                >
                  {todo.text}
                </span>

                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-yellow-600 px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-600 px-2 py-1 rounded hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Clear completed */}
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="mt-4 w-full bg-gray-800 py-2 rounded hover:bg-gray-700"
            >
              Clear Completed
            </button>
          )}
        </div>
      )}

      {/* ✅ Toggle Button */}
      <button
        onClick={handleShow}
        className="bg-green-800 text-xl text-white rounded-full px-6 py-3 fixed bottom-5 right-5 hover:bg-green-600 shadow-lg"
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Todo;