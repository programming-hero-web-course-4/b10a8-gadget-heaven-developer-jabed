import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto p-4 bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="navbar flex justify-between items-center">
        <div className="navbar-start">
          <h1 className="font-bold text-xl text-white hover:text-yellow-300 transition-colors duration-300">
            Gadget Heaven
          </h1>
        </div>

        <div className="navbar-center hidden sm:flex font-bold gap-8 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 transform hover:scale-110 transition duration-300"
                : "hover:text-yellow-300 transform hover:scale-110 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 transform hover:scale-110 transition duration-300"
                : "hover:text-yellow-300 transform hover:scale-110 transition duration-300"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 transform hover:scale-110 transition duration-300"
                : "hover:text-yellow-300 transform hover:scale-110 transition duration-300"
            }
          >
            Dashboard
          </NavLink>
        </div>

        <div className="navbar-end flex sm:hidden items-center gap-6">
          <button className="text-white" onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6h15m-15 6h15m-15 6h15"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-16 right-4 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-md shadow-lg flex flex-col items-start space-y-2 transition-transform duration-300 ease-in-out transform scale-95 hover:scale-100">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold transform hover:scale-110 transition duration-300"
                    : "text-white font-bold hover:text-yellow-300 transform hover:scale-110 transition duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold transform hover:scale-110 transition duration-300"
                    : "text-white font-bold hover:text-yellow-300 transform hover:scale-110 transition duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold transform hover:scale-110 transition duration-300"
                    : "text-white font-bold hover:text-yellow-300 transform hover:scale-110 transition duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>
            </div>
          )}
        </div>

        <div className="navbar-end flex gap-4 items-center">
          <span>
            <NavLink
              to="/purchase"
              className="btn bg-white text-purple-500 hover:bg-yellow-300 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </NavLink>
          </span>

          <span>
            <NavLink
              to="/dashboard"
              className="btn bg-white text-purple-500 hover:bg-yellow-300 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
