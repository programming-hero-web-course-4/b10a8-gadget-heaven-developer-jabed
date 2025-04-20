import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const initialCart = useLoaderData();
  const [addList, setAddList] = useState(initialCart);
  const [sorted, setSorted] = useState(false);

  const removeFromCart = (productId) => {
    const updatedList = addList.filter((item) => item.product_id !== productId);
    setAddList(updatedList);
    localStorage.setItem("cart", JSON.stringify(updatedList));

    Swal.fire({
      icon: "error",
      title: "Removed!",
      text: "❌ Item removed from cart.",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const sortByPrice = () => {
    if (sorted) return;
    const sortedCart = [...addList].sort((a, b) => b.price - a.price);
    setAddList(sortedCart);
    setSorted(true);
    Swal.fire({
      icon: "success",
      title: "Sorted by Price!",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const totalPrice = addList.reduce((sum, item) => sum + item.price, 0);

  const proceedToPurchase = () => {
    localStorage.setItem("purchase", JSON.stringify(addList));

    Swal.fire({
      title: "🎉 Payment Successful!",
      html: `
        <p>🛍️ <b>Items:</b> ${addList.length}</p>
        <p>💰 <b>Total:</b> $${totalPrice.toFixed(2)}</p>
      `,
      icon: "success",
      confirmButtonText: "Continue Shopping",
      confirmButtonColor: "#2563eb",
      background: "#f0f9ff",
      color: "#1e293b",
    }).then(() => {
      setAddList([]);
      localStorage.removeItem("cart");
    });
  };

  return (
    <div className="p-6 md:p-10 max-w-screen-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
      >
        <h1 className="text-4xl font-bold text-gradient">🛒 Your Cart</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <h2 className="font-bold text-xl text-green-700">
            Total: ${totalPrice.toFixed(2)}
          </h2>
          <button
            onClick={sortByPrice}
            disabled={sorted}
            className="btn px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-transform hover:scale-105"
          >
            Sort by Price
          </button>
          <button
            onClick={proceedToPurchase}
            className="btn px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-transform hover:scale-105"
          >
            Proceed to Purchase
          </button>
        </div>
      </motion.div>

      {addList.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {addList.map((item) => (
              <motion.div
                key={item.product_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="p-6 flex justify-between items-center bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex gap-6 items-center">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-24 h-24 object-cover rounded-xl border border-gray-200"
                  />
                  <div className="flex flex-col gap-2 max-w-[70%]">
                    <h2 className="text-lg font-semibold">
                      {item.product_title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-pink-600 font-bold">${item.price}</p>
                  </div>
                </div>
                <img
                  className="w-6 h-6 cursor-pointer ml-4 transition-transform hover:scale-125"
                  src="/assets/delete.png"
                  alt="Delete"
                  onClick={() => removeFromCart(item.product_id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-center mt-20 text-lg"
        >
          Your cart is empty.
        </motion.p>
      )}
    </div>
  );
};

export default Cart;
