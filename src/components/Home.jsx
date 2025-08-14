import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div data-theme="luxury" className="flex flex-col items-center justify-center text-center px-6 py-20 bg-base-100">
      <h1 className="text-5xl font-bold mb-6">Welcome to DevSpace </h1>
      <p className="text-lg max-w-xl mb-8">
        A place where developers can send connection requests, collaborate, and grow their network.
      </p>
      <div className="flex gap-4">
        <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
        <Link to="/signup" className="btn btn-secondary btn-lg">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
