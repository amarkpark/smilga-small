"use client"
// import { useState } from "react/cjs/react.production.min";
import { useState } from "react";



const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-6xl font-bold mb-4">{count}</h1>
      <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default ClientPage
