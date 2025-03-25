"use client";

import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-5xl ml-8">{count}</h1>
      <button
        className="btn btn-primary mt-4 ml-8"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>  
      <button
        className="btn btn-primary mt-4 ml-8"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default ClientPage;
