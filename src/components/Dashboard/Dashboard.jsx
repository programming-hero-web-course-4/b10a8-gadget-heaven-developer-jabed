import { Link, Outlet } from "react-router";


const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 bg-[#9538E2] p-7 pb-3">
        <h1 className="font-bold text-center text-2xl text-white">Dashboard</h1>
        <p className="font-bold text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center items-centerg gap-3">
          <Link
            to="./cart"
            className="px-4 py-2 bg-white text-[#9538E2] font-bold rounded-lg shadow-md hover:bg-gray-200"
          >
            Cart
          </Link>
          <Link
            to="./wishlist"
            className="px-4 py-2 bg-white text-[#9538E2] font-bold rounded-lg shadow-md hover:bg-gray-200"
          >
            Wishlist
          </Link>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
