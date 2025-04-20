import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IPhone = ({ iPhone }) => {
  const { product_id, product_image, product_title, price } = iPhone || {};

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <motion.img
        src={product_image}
        alt={product_title}
        className="w-64 h-48 object-cover bg-gray-100 rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col items-center text-center mt-2 gap-3">
        <h1 className="text-lg font-semibold text-gray-800">{product_title}</h1>
        <h2 className="text-xl font-bold text-green-600">${price}</h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to={`/products/${product_id}`}
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium shadow hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            aria-label={`View details of ${product_title}`}
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IPhone;
