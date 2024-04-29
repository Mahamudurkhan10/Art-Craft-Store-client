import { NavLink } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
const CardCollection = ({ craft }) => {
     const { photo, item_name,_id, customization, processing_time, stockstatus, subcategory_Name, shortdescription, rating, price } = craft;
     return (
          <div className="mt-9">
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-2xl">
                    <img
                         alt=""
                         src={photo}
                         className="absolute inset-0 size:[300px] object-cover"
                    />

                    <div className="relative bg-gradient-to-t from-gray-500/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                         <div className="p-4 sm:p-6">
                              <h1 className=" text-white text-xl font-bold"> {item_name} </h1>
                              <h1 className="text-lg text-blue-500"> {subcategory_Name} </h1>
                             
                                   <h3 className="mt-0.5 text-lg text-yellow-100 flex items-center">  Price :  <BsCurrencyDollar></BsCurrencyDollar> {price} </h3>
                                 <NavLink to={`/subcraft/${_id}`}> <button className="btn btn-info mt-3"> View Details  </button> </NavLink>
                              
                         </div>
                    </div>
               </article>
          </div>
     );
};

export default CardCollection;