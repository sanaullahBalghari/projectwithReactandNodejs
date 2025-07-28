import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-gray-600 text-lg mb-4">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 underline">Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
