
import { Outlet } from "react-router";
import HomeNav from "../Home/HomeNav";


const NavRoot = () => {
  return (
    <div className="flex gap-6 mt-20">
        
      <div>
        <HomeNav></HomeNav>
      </div>
        <div>
        <Outlet></Outlet>
        </div>
     
    </div>
  );
};

export default NavRoot;
