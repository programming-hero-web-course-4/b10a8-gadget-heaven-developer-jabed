import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Assuming you have react-toastify installed
import { motion } from "framer-motion";

const Purchase = () => {
  const [purchaseItems, setPurchaseItems] = useState([]);

  useEffect(() => {
    const storedPurchase = JSON.parse(localStorage.getItem("purchase"));
    if (storedPurchase && storedPurchase.length > 0) {
      setPurchaseItems(storedPurchase);
    } else {
      toast.error("No items in the cart to purchase.");
    }
  }, []);

  return (
    <div className="p-8 w-[80%] mx-auto bg-gradient-to-r mt-20 from-teal-400 to-blue-500 rounded-lg shadow-xl">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-bold text-center text-white mb-6"
      >
        📦 Purchase Page
      </motion.h1>

      {purchaseItems.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {purchaseItems.map((item) => (
            <motion.div
              key={item.product_id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex gap-6 items-center">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-24 h-24 object-cover rounded-xl border border-gray-200"
                />
                <div className="flex flex-col gap-2 max-w-[70%]">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.product_title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-pink-600 font-bold">${item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-center mt-20 text-lg"
        >
          No items to purchase.
        </motion.p>
      )}

      <ToastContainer />
    </div>
  );
};

export default Purchase;
