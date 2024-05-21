"use client"
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decriment = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex">
      <button
        className="btn btn-accent mr-4 self-center"
        data-testid="counter-button-decriment"
        onClick={decriment}
      >
        Decrement
      </button>
      <span
        className="text-6xl mr-4 self-center font-mono"
        data-testid="counter-value"
      >
        {count}
      </span>
      <button
        className="btn btn-secondary mr-4 self-center"
        data-testid="counter-button-increment"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
};

export default Counter;