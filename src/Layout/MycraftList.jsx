import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const MycraftList = () => {
     const {user}=useContext(AuthContext)
     const [crafts,setCrafts]=useState([]);
     useEffect(()=>{
          fetch(`http://localhost:5000/mycraft/${user?.email}`)
          .then(res => res.json())
          .then(data =>{
               setCrafts(data)
          })
     },[user])
     console.log(crafts );
     return (
          <div>
               <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
               {
                  crafts.map(craft => <div key={craft._id}>

                   <div className="card  bg-gray-100 h-[400px] hover:shadow-2xl card-compact p-3  shadow-sm">
                    <figure><img src={craft.photo} className="size-[300px]" alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title font-bold">  {craft.item_name} </h2>
                          
                           <div className="flex text-blue-700">
                              <p className="flex"> Price :<span className="text-sm flex items-center font-bold"> <BsCurrencyDollar></BsCurrencyDollar> {craft.price} </span></p>
                              <p className="flex gap-1"> Rating :<span className="text-sm flex items-center font-bold">  {craft.rating} <IoMdStar></IoMdStar> </span></p>
                             
                           </div>
                         
                           <div>
                              <p className="text-pink-500"> Email : {craft.email} </p>
                           </div>
                          
                           <div className="flex text-green-700">
                              <p> Customization: <span className="text-sm font-bold"> {craft.customization} </span> </p>
                              <p> Stock Status: <span className="text-sm font-bold"> {craft.stockstatus} </span> </p>
                           </div>
                         <div className="card-actions space-x-10 ">
                              <button className="btn bg-red-600"> Delete </button>
                              <button className="btn btn-success"> Update </button>
                         </div>
                    </div>
               </div>

                  </div> )  
               }
               </div>
          </div>
     );
};

export default MycraftList;