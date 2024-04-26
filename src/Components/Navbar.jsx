import { NavLink } from "react-router-dom";


const Navbar = () => {
     const Navbar = <>
     <NavLink className={'font-semibold'} to={'/'}> <li><a> Home</a></li></NavLink>
     <NavLink className={'font-semibold'} to={'/allartCraftItems'}> <li><a> All Art & craft Items</a></li></NavLink>
     <NavLink className={'font-semibold'} to={'/addcrafts'}> <li><a> Add Craft Item</a></li></NavLink>
     <NavLink className={'font-semibold'} to={'/myArtCraftlist'}> <li><a> My Art&Craft List</a></li></NavLink>
 
 
 
   </>
   return (
     <div className="navbar mt-11 bg-base-100">
       <div className="navbar-start">
         <div className="dropdown ">
           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </div>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {Navbar}
           </ul>
         </div>
        <NavLink to={'/'}>  <a className="btn btn-ghost text-xl  text-green-500">Art & Craft Store</a></NavLink>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
           {Navbar}
         </ul>
       </div>
       <div className="navbar-end">
       <NavLink to={'/login'} >  <a className="btn rounded-full"> Login </a></NavLink>
       </div>
     </div>
   );
};

export default Navbar;