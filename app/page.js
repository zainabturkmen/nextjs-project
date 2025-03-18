import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 ml-8 font-bold">Next.js Tutorial</h1>
      <Link href="/clients" className="btn btn-accent ml-8">Get Started</Link>
    </div>
  );
};

export default page;
