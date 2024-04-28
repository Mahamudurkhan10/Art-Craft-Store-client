import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Card = ({ craft }) => {
    const {photo,item_name,customization,processing_time, stockstatus,subcategory_name,shortdescription,rating,price}=craft;
     return (
          <div>
               <div className="card bg-gray-100 h-[480px] hover:shadow-2xl card-compact p-3  shadow-sm">
                    <figure><img src={photo} className="size-[300px]"  alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title font-bold">  {item_name} </h2>
                          <p className="font-semibold">  {subcategory_name} </p>
                           <div className="flex text-blue-700">
                              <p className="flex"> Price :<span className="text-sm flex items-center font-bold"> <BsCurrencyDollar></BsCurrencyDollar> {price} </span></p>
                              <p className="flex gap-1"> Rating :<span className="text-sm flex items-center font-bold">  {rating} <IoMdStar></IoMdStar> </span></p>
                             
                           </div>
                         
                           <p className=" font-medium"> Description: <span className="text-sm font-normal">{shortdescription} </span> </p>
                           <p className="font-medium text-pink-600"> processing_time :  {processing_time} </p>
                           <div className="flex text-green-700">
                              <p> Customization: <span className="text-sm font-bold"> {customization} </span> </p>
                              <p> Stock Status: <span className="text-sm font-bold"> {stockstatus} </span> </p>
                           </div>
                         <div className="card-actions justify-center">
                             <NavLink to={`/view/${craft._id}`}> <button className="btn btn-info">View Details </button></NavLink>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;