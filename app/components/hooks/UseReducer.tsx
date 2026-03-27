'use client';

import { useReducer } from 'react';

// Initial state
const initial = 0;

// Reducer function
function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">{state}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>

        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
