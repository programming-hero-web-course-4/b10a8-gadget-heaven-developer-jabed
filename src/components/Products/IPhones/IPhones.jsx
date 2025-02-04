import { useEffect, useState } from "react";
import IPhone from "./IPhone";

const IPhones = () => {
    const [iPhones, setIPhone] = useState([]);
    useEffect(()=> {
        fetch("./iPhone.json")
         .then(response => response.json())
         .then(data => setIPhone(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            iPhones.map((iPhone) => <IPhone iPhone={iPhone} key={iPhone.product_id}></IPhone>)
        }
    </div>
    );
};

export default IPhones;