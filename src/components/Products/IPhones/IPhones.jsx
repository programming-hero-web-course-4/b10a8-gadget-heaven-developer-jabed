import { useEffect, useState } from "react";
import IPhone from "./IPhone";

const IPhones = () => {
  const [iPhones, setIPhones] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        const singleIphone = data.filter((item) => item.category === "iphones");
        setIPhones(singleIphone);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {iPhones.map((iPhone) => (
        <IPhone iPhone={iPhone} key={iPhone.product_id} />
      ))}
    </div>
  );
};

export default IPhones;
