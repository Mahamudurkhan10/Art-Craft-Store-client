import { NavLink, useLoaderData } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const CardDetails = () => {
     const craft = useLoaderData()
 
     const {photo,item_name,customization,processing_time, stockstatus,subcategory_name,shortdescription,rating,price}=craft;
     
     return (
          <div>
          <div className="card bg-gray-100 w-3/5 mx-auto mt-4 h-[500px] hover:shadow-2xl card-compact p-3  shadow-sm">
                    <figure><img src={photo} className="size-[400px]" alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className=" text-center text-xl text-blue-600 font-bold ">  {item_name} </h2>
                          <p className="font-     bold">  {subcategory_name} </p>
                            <div className="flex text-green-900 font-semibold">
                                <p> Email: {craft.email} </p>
                                <p> Name : {craft.name} </p>
                              </div>  

                           <div className="flex text-blue-700">
                              <p className="flex"> Price :<span className="text-sm flex items-center font-bold"> <BsCurrencyDollar></BsCurrencyDollar> {price} </span></p>
                              <p className="flex gap-1"> Rating :<span className="text-sm flex items-center font-bold">  {rating} <IoMdStar></IoMdStar> </span></p>
                             
                           </div>
                         
                           <p className=" font-medium"> Description: <span className="text-sm font-normal">{shortdescription} </span> </p>
                           <p className="font-medium text-pink-600"> processing_time: {processing_time} </p>
                           <div className="flex text-green-700">
                              <p> Customization: <span className="text-sm font-bold"> {customization} </span> </p>
                              <p> Stock Status: <span className="text-sm font-bold"> {stockstatus} </span> </p>
                           </div>
                         <div className="card-actions justify-end">
                             <NavLink to={`/`}> <button className="btn btn-success"> Go Home </button></NavLink>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CardDetails;