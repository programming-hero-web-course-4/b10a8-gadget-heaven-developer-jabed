import { useEffect, useState } from "react";
import SmartWatch from "./SmartWatch";

const SmartsWatchs = () => {
  const [smartWatches, setSmartWatches] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        const smartWatchs = data.filter((item) => item.category === "watches");
        setSmartWatches(smartWatchs);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {smartWatches.map((smartWatch) => (
        <SmartWatch smartWatch={smartWatch} key={smartWatch.product_id} />
      ))}
    </div>
  );
};

export default SmartsWatchs;
