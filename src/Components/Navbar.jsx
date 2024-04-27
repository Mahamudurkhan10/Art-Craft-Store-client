import { Link, NavLink } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { useContext } from "react";
import { LuLogOut } from "react-icons/lu";
import { AuthContext } from "../AuthProvider/Auth";
const Navbar = () => {
   const {logOut, user}= useContext(AuthContext)
  
   const handleLogOut = ()=>{
     logOut()
   }
     const Navbar = <>
     <NavLink className={'font-semibold'} to={'/'}> <li><a> Home</a></li></NavLink>
     <NavLink className={'font-semibold'} to={'/allartCraftItems'}> <li><a> All Art & craft Items</a></li></NavLink>
     <NavLink className={'font-semibold'} to={'/addcrafts'}> <li><a> Add Craft Item</a></li></NavLink>
     <NavLink className={'font-semibold'} to={'/myArtCraftlist'}> <li><a> My Art&Craft List</a></li></NavLink>
 
 
 
   </>
   return (
     <div className="navbar mb-32 lg:mb-0 mt-11 bg-base-100">
       <div className="navbar-start">
         <div className="dropdown ">
           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </div>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {Navbar}
           </ul>
         </div>
        <NavLink to={'/'}>  <a className="btn btn-ghost text-xl  text-blue-500"> <span> <FaChartPie></FaChartPie> </span>   Art & Craft Store</a></NavLink>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
           {Navbar}
         </ul>
       </div>
       <div className="navbar-end">
       {
          user ? (
            <>
            <div className="tooltip" data-tip={user?.displayName|| 'not fount'}> <span> <img className="rounded-full size-10 mr-3 border-2 border-red-600" src= { user?.photoURL ||"https://i.ibb.co/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} alt="" /> </span></div>
             <a href="" onClick={handleLogOut} className="btn"> <LuLogOut></LuLogOut> LogOUt</a>
            </>
          ):(
            <Link to={'/login'}>
              <a href="" className="btn"> <LuLogOut></LuLogOut> Log In </a>
            </Link>
          )
        }
       </div>
     </div>
   );
};

export default Navbar;