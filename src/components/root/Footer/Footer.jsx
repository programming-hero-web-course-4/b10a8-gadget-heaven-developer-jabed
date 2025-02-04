
const Footer = () => {
    return (
        <div className="p-12 font-bold mt-12 bg-slate-300 mx-auto">
            <div className="text-center mb-3">
                <h1 className="text-3xl text-center">Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="flex flex-col justify-around mt-4 lg:flex-row">
                <div  className="flex flex-col cursor-pointer">
                    <li className="text-xl font-bold">Services</li>
                    <li><a>Product Support</a></li>
                    <li><a>Order Tracking</a></li>
                    <li><a> Shoping & Delivery</a></li>
                    <li><a> Returns </a></li>
                    
                </div>
                <div className="flex flex-col cursor-pointer">
                    <li className="text-xl font-bold">Company</li>
                    <li><a>About Us</a></li>
                    <li><a>Careers</a></li>
                    <li><a> Contact</a></li>
                    
                </div>
                  
                <div className="flex flex-col cursor-pointer">
                    <li className="text-xl font-bold"> Legal </li>
                    <li><a>Terms</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a> Cookie Policy</a></li>
                    
                </div>
                  
            </div>
        </div>
    );
};

export default Footer;