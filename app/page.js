import Link from "next/link";

const HomePage = () => {
  console.log("home Page hehehehe");
  return (
    <div>
      <h1 className="text-5xl mb-8 ml-8 font-bold">Next.js Tutorial</h1>
      <Link href="/clients" className="btn btn-accent ml-8">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
