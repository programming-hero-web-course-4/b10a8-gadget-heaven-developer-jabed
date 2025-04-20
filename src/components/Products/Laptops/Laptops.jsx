import { useEffect, useState } from "react";
import Laptop from "./Laptop";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        const laptop = data.filter((item) => item.category === "laptops")
        setLaptops(laptop)
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {laptops.map((laptop) => (
        <Laptop laptop={laptop} key={laptop.product_id}></Laptop>
      ))}
    </div>
  );
};

export default Laptops;
