import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"; // useNavigate for routing
import { getStoredCart } from "../Card&WishListStore/AddToCart"; // Assuming you have this function
import { ToastContainer, toast, Bounce } from "react-toastify";

const Cart = () => {
  const [addList, setAddList] = useState([]);
  const [sorted, setSorted] = useState(false);
  const allProducts = useLoaderData();

  useEffect(() => {
    if (!allProducts?.length) return;

    const storeCart = getStoredCart();
    const addCart = allProducts.filter((product) =>
      storeCart.includes(product.product_id.toString())
    );

    setAddList(addCart);
  }, [allProducts]);

  const removeFromCart = (id) => {
    // Remove from UI first
    const updatedCart = addList.filter((item) => item.product_id !== id);
    setAddList(updatedCart);

    // Update localStorage after
    const storeCart = getStoredCart();
    const newCart = storeCart.filter((itemId) => itemId !== id.toString());
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Notify user
    toast.success("Product removed from cart");
  };

  const totalPrice = addList.reduce((sum, item) => sum + item.price, 0);

  const sortByPrice = () => {
    if (sorted) return; // Do nothing if already sorted
    const sortedCart = [...addList].sort((a, b) => b.price - a.price);
    setAddList(sortedCart);
    setSorted(true);
    toast.success("Cart sorted by price");
  };

  const handlePurchase = () => {
    // Store the cart items in localStorage for the purchase page
    localStorage.setItem("purchase", JSON.stringify(addList));

    // Clear the cart
    localStorage.removeItem("cart");

    // Show success message and handle redirection
    toast.success("Purchase successful! Redirecting to purchase page...");
  };

  return (
    <div className="p-5 w-[70%] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <div className="flex gap-6">
          <h1 className="font-bold">Total: ${totalPrice.toFixed(2)}</h1>
          <button
            className="btn"
            onClick={sortByPrice}
            disabled={sorted} // Disable the button if already sorted
          >
            Sort by Price
          </button>
          <Link to="/purchase" className="btn">Proceed to Purchase</Link>
        </div>
      </div>

      {addList.length > 0 ? (
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
          {addList.map((item) => (
            <div
              key={item.product_id}
              className="p-4 flex justify-between items-center bg-white shadow rounded-lg"
            >
              <div className="flex gap-6">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold">{item.product_title}</h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-gray-700 font-bold">${item.price}</p>
                </div>
              </div>
              <img
                className="w-8 h-8 cursor-pointer"
                src="/assets/delete.png"
                alt="Delete"
                onClick={() => removeFromCart(item.product_id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
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

export default Cart;
