'use client';

import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // increment
  const handleinc = () => {
    setCounter(counter + 1);
  };
  //  reset
  const handleres = () => {
    setCounter(0);
  };

  // decerement
  const handledec = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="min-h-screen bg-indigo-600 textr-white flex flex-col justify-center items-center">
      <div className="text-pink-700 text-4xl m-4">
        <h1>{counter}</h1>
      </div>
      <section className="bg-blue-300  rounded p-24">
        <button
          onClick={handleinc}
          className="bg-teal-700 text-white rounded hover:bg-teal-600 px-4 py-2 m-2"
        >
          Increment
        </button>
        <button
          onClick={handleres}
          className="bg-teal-700 text-white rounded hover:bg-teal-600 px-4 py-2 m-2"
        >
          Reset
        </button>
        <button
          onClick={handledec}
          className="bg-teal-700 text-white rounded hover:bg-teal-600 px-4 py-2 m-2"
        >
          Decrement
        </button>
      </section>
    </div>
  );
};

export default Counter;
