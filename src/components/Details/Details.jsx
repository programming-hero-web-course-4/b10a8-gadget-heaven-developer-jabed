import { useLoaderData, useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { product_id } = useParams();
  const data = useLoaderData();

  const product = data.find((p) => String(p.product_id) === product_id);

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

  // ✅ LocalStorage Cart Handler
  const handleAddCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = storedCart.find(
      (item) => item.product_id === product.product_id
    );
    if (!exists) {
      storedCart.push(product);
      localStorage.setItem("cart", JSON.stringify(storedCart));
      toast.success("🛒 Added to cart!", {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    } else {
      toast.info("🛒 Already in cart!");
    }
  };

  // ✅ LocalStorage Wishlist Handler
  const handleAddWish = () => {
    const storedWish = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = storedWish.find(
      (item) => item.product_id === product.product_id
    );
    if (!exists) {
      storedWish.push(product);
      localStorage.setItem("wishlist", JSON.stringify(storedWish));
      toast.success("❤️ Added to wishlist!", {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    } else {
      toast.info("❤️ Already in wishlist!");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-2 bg-purple-700 p-7 pb-36">
        <h1 className="font-bold text-center text-2xl text-white">
          Product Details
        </h1>
        <p className="font-bold text-center text-white max-w-2xl">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
      </div>

      {/* Product */}
      <div className="p-5 flex justify-center items-center gap-5 w-[90%] lg:w-[70%] mx-auto bg-slate-200 rounded-2xl -translate-y-[40px] lg:-translate-y-[100px] shadow-lg">
        <div className="flex flex-col items-center md:flex-row gap-6">
          <img
            src={product_image}
            alt={product_title || "Product image"}
            className="w-[300px] h-[250px] object-cover p-4 bg-white rounded-md"
          />

          <div className="space-y-3">
            <h1 className="text-xl font-bold">{product_title}</h1>
            <h2 className="text-lg font-bold">Price: ${price}</h2>
            <p
              className={`font-semibold w-fit px-3 py-1 rounded-full ${
                availability ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </p>
            <p>{description}</p>

            <h3 className="font-semibold mt-4">Specifications:</h3>
            <ul className="list-disc list-inside">
              {Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4">Rating:</h3>
            <p>{rating}</p>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={handleAddCart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>

              <span onClick={handleAddWish} className="cursor-pointer">
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

      <ToastContainer />
    </div>
  );
};

export default Details;
