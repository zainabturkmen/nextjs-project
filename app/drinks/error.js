"use client"

const error = (error) => {
    console.log(error);
    
//   return <span className="error">there was an error</span>;
  return <span className="error">{error.error.message}</span>;
};

export default error;
