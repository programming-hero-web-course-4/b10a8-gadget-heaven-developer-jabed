import { useEffect, useState } from "react";
import SmartWatch from "./SmartWatch";

const SmartsWatchs = () => {
  const [smartWatches, setSmartWatches] = useState([]);
  useEffect(() => {
    fetch("smartWatch.json")
      .then((response) => response.json())
      .then((data) => setSmartWatches(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {
        smartWatches.map((smartWatch) => <SmartWatch smartWatch={smartWatch} key={smartWatch.product_id}></SmartWatch>)
      }
    </div>
  );
};

export default SmartsWatchs;
