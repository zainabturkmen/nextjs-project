import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl">About page</h1>
      <Link href="/" className="text-2xl">
        Home Page
      </Link>
    </div>
  );
};

export default AboutPage;
