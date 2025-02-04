import { useEffect, useState } from "react";
import { getStoredWish, removeFromStoredWish } from "../Card&WishListStore/AddToCart";
import { ToastContainer, toast, Bounce } from "react-toastify";

const WishCart = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    setWishList(getStoredWish());
  }, []);

  const removeFromWishList = (id) => {
    const updatedWishList = wishList.filter((item) => item.product_id !== id);
    setWishList(updatedWishList);
    removeFromStoredWish(id);
    toast.success("Removed from wishlist!");
  };

  return (
    <div className="p-5">
      <div className="flex justify-around items-center">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      </div>

      {wishList.length > 0 ? (
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
          {wishList.map((item) => (
            <div
              key={item.product_id}
              className="p-4 flex justify-between gap-6 bg-white shadow rounded-lg"
            >
              <div className="flex gap-6">
                <img
                  src={item.product_image || 'default-image.jpg'}  // Fallback image if missing
                  alt={item.product_title || 'No Title'}  // Fallback alt text
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold mt-2 grow">
                    {item.product_title || 'No Title'}  
                  </h2>
                  <p className="text-sm text-gray-500 font-bold mt-1">
                    {item.description || 'No Description'}  
                  </p>
                  <p className="text-gray-700 font-bold mt-1">
                    ${item.price || '0.00'}  
                  </p>
                </div>
              </div>
              <button
                className="text-red-500 font-bold"
                onClick={() => removeFromWishList(item.product_id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default WishCart;
