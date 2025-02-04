import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";  // Assuming you have react-toastify installed

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
    <div className="p-5 w-[70%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Purchase Page</h1>
      {purchaseItems.length > 0 ? (
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
          {purchaseItems.map((item) => (
            <div
              key={item.product_id}
              className="p-4 flex justify-around gap-6 bg-white shadow rounded-lg"
            >
              <div className="flex grow gap-6">
                <div>
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-20 h-20 object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg font-bold mt-2 grow">
                    {item.product_title}
                  </h2>
                  <p className="text-sm text-center text-gray-500 font-bold mt-1">
                    {item.description}
                  </p>
                  <p className="text-gray-700 font-bold mt-1">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items to purchase.</p>
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
      />
    </div>
  );
};

export default Purchase;
