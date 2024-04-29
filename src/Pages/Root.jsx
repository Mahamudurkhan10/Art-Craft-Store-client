import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";



const Root = () => {
     return (
          <div className="max-w-7xl mx-auto font-Lato"> 
               <Navbar> </Navbar>
               <Outlet></Outlet>
              <Footer></Footer>
          
          </div>
     );
};

export default Root;