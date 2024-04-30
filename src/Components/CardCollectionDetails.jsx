import { NavLink, useLoaderData } from "react-router-dom";

import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
const CardCollectionDetails = () => {
     const craft = useLoaderData()
     const { photo, item_name, processing_time,  subcategory_Name, shortdescription, rating, price } = craft;
     return (
          <div>
               <div className="card lg:w-3/5 lg:mx-auto card-side bg-gray-300 shadow-xl">
                    <figure><img src= {photo} alt="Movie" className=" lg:p-4 "/></figure>
                    <div  className=" mt-8 text-black p-3 " >
                         <h2  className="text-blue-600 font-bold"> {item_name} </h2>
                         <p className="font-semibold text-green-700"> subCategory Name : {subcategory_Name} </p>
                          
                              
                              <p className="text-purple-600 font-normal mt-8">  Processing_Time : { processing_time} </p>
                          
                           <h1 className="font-bold text-green-600 mt-9 mb-5"> Description : <span className="font-normal text-pink-500"> {shortdescription} </span> </h1>
                          <div className="flex mt-6 text-blue-300 font-bold justify-between">
                          <p className="flex"> Price : <span className="font-bold flex items-center text-green-500 items-center"> <BsCurrencyDollar></BsCurrencyDollar> {price} </span> </p> 
                          <p  className="flex"> Rating : <span className="font-bold flex items-center text-green-500"> <IoMdStar></IoMdStar> {rating} </span> </p>
                          </div>
                         <div className="card-actions   justify-center">
                            <NavLink to={'/'}>   <button className="btn btn-success"> Back Home </button> </NavLink>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CardCollectionDetails;