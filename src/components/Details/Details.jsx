import { useLoaderData, useParams } from "react-router";
import {
  addToStoredCart,
  addToStoredWish,
  getStoredCart,  // Assuming you have a method to get the cart items
} from "../Dashboard/Card&WishListStore/AddToCart";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Details = () => {
  const { product_id } = useParams();
  const id = Number(product_id);

  const data = useLoaderData();
  const product = data.find((p) => p.product_id === id);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification = [],
    rating,
  } = product;

  const handleAddCart = (id) => {
    addToStoredCart(id);
    toast.success("🦄 Wow You Added the Product to Cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleAddWish = (id) => {
    addToStoredWish(id);
    toast.success("🌟 Item added to your wishlist!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };



  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 bg-[#9538E2] p-7 pb-36">
        <h1 className="font-bold text-center text-2xl text-white">Product Details</h1>
        <p className="font-bold text-center text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to 
          the coolest accessories, we have it all!
        </p>
      </div>

      {/* Cart Section */}
     
      {/* Product Details */}
      <div className="p-5 flex justify-center items-center gap-5 w-[70%] mx-auto bg-slate-200 rounded-2xl -translate-y-[40px]  lg:-translate-y-[100px]">
        <div className="flex flex-col items-center md:flex-row gap-6 ">
          <img
            src={product_image}
            alt={product_title}
            className="w-[30%]  object-cover p-4 bg-white  rounded-md"
          />
          <div>
            <h1 className="text-xl font-bold">{product_title}</h1>
            <h2 className="text-lg  font-bold mt-2">Price: ${price}</h2>
            <p
              className={`font-semibold ${
                availability
                  ? "text-green-500 bg-[#9538E2] rounded-full w-[20%] text-center p-2 font-bold"
                  : "text-red-500"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </p>
            <p className="mt-2">{description}</p>
            <h3 className="font-semibold mt-4">Specifications:</h3>
            <ul className="list-disc list-inside">
              {Specification?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4">Rating:</h3>
            <p>{rating}</p>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => handleAddCart(product_id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <span
                onClick={() => handleAddWish(product_id)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500 hover:text-red-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

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

export default Details;
