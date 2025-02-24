import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-7xl">Home page</h1>
      <Link href="/about" className="text-2xl">About</Link>
    </div>
  );
};

export default page;
