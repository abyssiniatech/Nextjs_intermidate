
'use client'

import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 bg-indigo-900 text-white rounded m-2 flex flex-col items-center gap-4 ">
      <p>
        You clicked{' '}
        <span
          style={{ color: count < 0 ? 'yellow' : count < 0 ? 'white':"red" }}


          className="font-bold"
        >
          {count}
        </span>{' '}
        times
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-green-500 text-white p-2 rounded"
      >
        reset
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white p-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
}

export default Usestate
