"use client"
// import { useState } from "react/cjs/react.production.min";
// import { useState } from "react";
import Counter from "@/components/Counter";



const ClientPage = () => {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-6xl mb-4">Client Page</h1>
      <Counter/>
    </div>
  )
};

export default ClientPage;
