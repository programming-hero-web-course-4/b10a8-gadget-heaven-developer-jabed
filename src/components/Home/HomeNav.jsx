import { Link } from "react-router";

const HomeNav = () => {
    return (
        <div className="flex flex-col mt-3 text-xl font-bold justify-around gap-3 bg-[#FFFFFF]" >
            <Link className="bg-[#09080F0D] flex text-center p-1.5 rounded-md" to='./allProducts'>All Products</Link>
            <Link className="bg-[#09080F0D] flex text-center p-1.5 rounded-md" to='./laptops'>Laptops</Link>
            <Link className="bg-[#09080F0D] flex text-center p-1.5 rounded-md" to='./phones'>Phones</Link>
            <Link className="bg-[#09080F0D] flex text-center p-1.5 rounded-md" to='./smartWatches'>Smart Watches</Link>
            <Link className="bg-[#09080F0D] flex text-center p-1.5 rounded-md" to='./iPhone'>Iphone</Link>
        </div>
    );
};

export default HomeNav;