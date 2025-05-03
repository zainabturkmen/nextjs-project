// /app/signin/page.js

const SignInPage = ({ params }) => {
  // Only log on the client to avoid SSR/client mismatch noise
  if (typeof window !== "undefined") {
    console.log("Client params:", params);
  }

  return <h1 className="text-7xl">Sign In Page</h1>;
};

export default SignInPage;
