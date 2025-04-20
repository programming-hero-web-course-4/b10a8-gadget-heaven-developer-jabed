import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 text-center">
      <div className="relative mb-6">
        <div className="text-[10rem] font-bold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 select-none">
          404
        </div>
        <div className="absolute inset-0 flex justify-center items-center animate-spin-slow">
          <div className="w-32 h-32 border-4 border-dashed rounded-full border-pink-500"></div>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-400 mb-8 max-w-md">
        The page you re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 text-white px-6 py-3 rounded-full text-lg shadow-lg"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
