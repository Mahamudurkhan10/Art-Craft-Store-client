import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const MycraftList = () => {
     const { user } = useContext(AuthContext)
     const [crafts, setCrafts] = useState([]);
     const handleDelete = (_id) => {
          console.log(_id)
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then((result) => {
               if (result.isConfirmed) {

                    fetch(`http://localhost:5000/craft/${_id}`,{
                         method:'DELETE'
                    }
                )
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your Craft has been deleted.",
                                        icon: "success"

                                   });
                                   const remaining = crafts.filter(craft => craft._id !== _id)
                                   setCrafts(remaining)
                              }
                         })
               }
          });
     }
     useEffect(() => {
          fetch(`http://localhost:5000/mycraft/${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    setCrafts(data)
               })
     }, [user])

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
                                         <p className="text-purple-600 font-medium"> processing_time : {craft.processing_time} </p>

                                        <div>
                                             <p className="text-pink-500"> Email : {craft.email} </p>
                                        </div>

                                        <div className="flex text-green-700">
                                             <p> Customization: <span className="text-sm font-bold"> {craft.customization} </span> </p>
                                             <p> Stock Status: <span className="text-sm font-bold"> {craft.stockstatus} </span> </p>
                                        </div>
                                        <div className="card-actions space-x-10 ">
                                             <button onClick={() => handleDelete(craft._id)} className="btn bg-red-600"> Delete </button>
                                             <NavLink to={`/update/${craft._id}`}><button className="btn btn-success"> Update </button></NavLink>
                                        </div>
                                   </div>
                              </div>

                         </div>)
                    }
               </div>
          </div>
     );
};

export default MycraftList;