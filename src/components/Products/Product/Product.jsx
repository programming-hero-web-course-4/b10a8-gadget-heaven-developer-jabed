import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product || {};

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <figure>
        <img
          src={product_image}
          alt={product_title || "Product Image"}
          className="w-64 h-48 object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col gap-4 mt-3">
        <h3 className="text-lg font-semibold">{product_title}</h3>
        <h2 className="text-xl font-bold text-green-600">${price}</h2>
        <Link
          to={`/products/${product_id}`}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          aria-label={`View details of ${product_title}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
