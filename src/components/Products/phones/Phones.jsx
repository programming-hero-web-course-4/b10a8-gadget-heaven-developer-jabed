import { useEffect, useState } from "react";
import Phone from "./Phone";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch("./phones.json")
         .then(response => response.json())
         .then(data => setPhones(data))
    }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            phones.map((phone) => <Phone phone={phone} key={phone.product_id}></Phone>)
        }
    </div>
  );
};

export default Phones;
