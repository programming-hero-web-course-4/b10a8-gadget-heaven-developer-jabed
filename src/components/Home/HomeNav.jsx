import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HomeNav = () => {
  return (
    <motion.div
      className="flex flex-col mt-3 text-xl font-bold justify-around gap-3 bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="flex text-center p-1.5 rounded-md"
        whileHover={{ scale: 1.05, backgroundColor: "#4B7BF7", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink
          to="./allProducts"
          className={({ isActive }) =>
            isActive
              ? "text-[#4B7BF7] font-bold px-6 py-2 rounded-md"
              : "text-gray-700 hover:text-black px-6 py-2 rounded-md transition duration-300"
          }
        >
          All Products
        </NavLink>
      </motion.div>

      <motion.div
        className="flex text-center p-1.5 rounded-md"
        whileHover={{ scale: 1.05, backgroundColor: "#4B7BF7", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink
          to="./laptops"
          className={({ isActive }) =>
            isActive
              ? "text-[#4B7BF7] font-bold px-6 py-2 rounded-md"
              : "text-gray-700 hover:text-black px-6 py-2 rounded-md transition duration-300"
          }
        >
          Laptops
        </NavLink>
      </motion.div>

      <motion.div
        className="flex text-center p-1.5 rounded-md"
        whileHover={{ scale: 1.05, backgroundColor: "#4B7BF7", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink
          to="./phones"
          className={({ isActive }) =>
            isActive
              ? "text-[#4B7BF7] font-bold px-6 py-2 rounded-md"
              : "text-gray-700 hover:text-black px-6 py-2 rounded-md transition duration-300"
          }
        >
          Phones
        </NavLink>
      </motion.div>

      <motion.div
        className="flex text-center p-1.5 rounded-md"
        whileHover={{ scale: 1.05, backgroundColor: "#4B7BF7", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink
          to="./smartWatches"
          className={({ isActive }) =>
            isActive
              ? "text-[#4B7BF7] font-bold px-6 py-2 rounded-md"
              : "text-gray-700 hover:text-black px-6 py-2 rounded-md transition duration-300"
          }
        >
          Smart Watches
        </NavLink>
      </motion.div>

      <motion.div
        className="flex text-center p-1.5 rounded-md"
        whileHover={{ scale: 1.05, backgroundColor: "#4B7BF7", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink
          to="./iPhone"
          className={({ isActive }) =>
            isActive
              ? "text-[#4B7BF7] font-bold px-6 py-2 rounded-md"
              : "text-gray-700 hover:text-black px-6 py-2 rounded-md transition duration-300"
          }
        >
          iPhone
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default HomeNav;
