import { Link } from "react-router";

const Phone = ({ phone }) => {
  const { product_id,product_image, product_title, price } = phone || {};
  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
      <div>
        <img
          src={product_image}
          alt={product_title}
          className="w-64 h-48 object-cover bg-white rounded-md"
        />
      </div>
      <div  className="flex flex-col mt-2 gap-3">
        <h1 className="text-lg font-semibold">{product_title}</h1>
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

export default Phone;
