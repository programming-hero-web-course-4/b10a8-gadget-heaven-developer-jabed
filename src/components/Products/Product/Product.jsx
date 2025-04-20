import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product || {};

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 border border-gray-200 rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
    >
      <motion.img
        src={product_image}
        alt={product_title || "Product Image"}
        className="w-64 h-48 object-cover rounded-md bg-gray-100"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col gap-3 mt-4 items-center text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product_title}</h3>
        <h2 className="text-xl font-bold text-green-600">${price}</h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to={`/products/${product_id}`}
            className="mt-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium shadow hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
            aria-label={`View details of ${product_title}`}
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Product;
