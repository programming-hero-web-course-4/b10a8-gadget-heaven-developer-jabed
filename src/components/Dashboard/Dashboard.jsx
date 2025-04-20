import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center w-[80%] mx-auto rounded-lg gap-2 bg-[#9538E2] p-7 pb-3">
        <h1 className="font-bold text-center text-2xl text-white">Dashboard</h1>
        <p className="font-bold text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center items-center gap-6">
          <NavLink
            to="./cart"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 bg-gradient-to-r from-[#9538E2] to-[#7A27D7] text-white font-bold rounded-lg shadow-xl transform scale-105 transition duration-300 ease-in-out"
                : "px-6 py-3 bg-white text-[#9538E2] font-bold rounded-lg shadow-md hover:bg-gray-200 transform hover:scale-110 transition duration-300 ease-in-out"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="./wishlist"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 bg-gradient-to-r from-[#9538E2] to-[#7A27D7] text-white font-bold rounded-lg shadow-xl transform scale-105 transition duration-300 ease-in-out"
                : "px-6 py-3 bg-white text-[#9538E2] font-bold rounded-lg shadow-md hover:bg-gray-200 transform hover:scale-110 transition duration-300 ease-in-out"
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
