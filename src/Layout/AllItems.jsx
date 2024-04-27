import { NavLink, useLoaderData } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const AllItems = () => {
     const crafts = useLoaderData();
     console.log(crafts);
     return (
          <div className="mb-8">
                   <div className="text-3xl font-bold w-1/2 mx-auto text-center m-5 text-green-600">
                       <h1> All Art & Craft  </h1>
                   </div>
               <div className="overflow-x-auto bg-slate-50 rounded-lg">
                    <table className="table">
                         {/* head */}
                         <thead className="text-xl font-bold">
                              <tr> <th></th>
                                 <th> sub category</th>
                                   <th> Email </th>
                                   <th>Name</th>
                                   <th>Price</th>
                                
                              </tr>
                         </thead>
                         <tbody>
                              {/* row 1 */}
                            { 
                              crafts.map(craft =>   <tr key={craft._id}>
                                   <td className="text-3xl font-bold"> . </td>
                                   <th> {craft.subcategory_name} </th>
                                   <td> {craft.email} </td>
                                   <td> {craft.name} </td>
                                   <td className="flex  mt-4 items-center"> <BsCurrencyDollar></BsCurrencyDollar> {craft.price} </td>
                                   <td> <NavLink to={`/view/${craft._id}`}><button className="btn btn-info  "> View Details  </button></NavLink> </td>
                              </tr>)
                            }
                          
                              
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default AllItems;

