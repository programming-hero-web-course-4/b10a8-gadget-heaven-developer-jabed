import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))

  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            products.map((product) => <Product product={product} key={product.product_id}></Product>)
        }
    </div>
  );
};

export default AllProducts;
