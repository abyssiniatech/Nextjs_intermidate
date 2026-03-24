// 'use client';

// import { useState, useEffect } from 'react';

// export default function TodoApp() {
//   const [task, setTask] = useState('');
//   const [todos, setTodos] = useState([]);

//   // Load todos from localStorage
//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(storedTodos);
//   }, []);

//   // Save todos to localStorage
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!task.trim()) return;
//     setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
//     setTask('');
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
//           Amazing To-Do App
//         </h1>

//         <form onSubmit={addTodo} className="flex gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Add a new task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             type="submit"
//             className="bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition"
//           >
//             Add
//           </button>
//         </form>

//         <ul>
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex justify-between items-center mb-2 p-2 rounded-lg bg-gray-100"
//             >
//               <span
//                 onClick={() => toggleComplete(todo.id)}
//                 className={`flex-1 cursor-pointer ${
//                   todo.completed ? 'line-through text-gray-400' : ''
//                 }`}
//               >
//                 {todo.text}
//               </span>
//               <button
//                 onClick={() => deleteTodo(todo.id)}
//                 className="text-red-500 hover:text-red-700 font-bold"
//               >
//                 ✕
//               </button>
//             </li>
//           ))}
//         </ul>

//         {todos.length === 0 && (
//           <p className="text-center text-gray-500 mt-4">
//             No tasks yet. Add your first one!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
