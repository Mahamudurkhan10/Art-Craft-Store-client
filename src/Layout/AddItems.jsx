import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import Swal from "sweetalert2";


const AddItems = () => {

const {user}=useContext(AuthContext)

  const   handleCraftfrom =(e)=>{
               e.preventDefault()
               const form = e.target
               const email = user.email
               const name =e.target.name.value 
               const photo = e.target.photo.value 
               const item_name = e.target.item_name.value 
               const subcategory_name = e.target.subcategory_name.value;
               const  shortdescription=e.target.shortdescription.value;
               const rating = e.target.rating.value;
               const  price = e.target.price.value;
               const processing_time = e.target.processing_time.value 
               const customization = e.target.customization.value
               const stockstatus = e.target.stockstatus.value
               const craftItem = {email,name,photo,item_name,customization,processing_time, stockstatus,subcategory_name,shortdescription,rating,price}
               console.log(craftItem)
               fetch('https://art-craft-store-server-two.vercel.app/craft',{   
                   
                    method:'POST',
                    headers:{
                         'content-type':'application/json'
                    },
                    body: JSON.stringify(craftItem)
               })
                
               .then(res =>res.json())
               .then(data =>{
                    console.log(data)
                    if(data.insertedId){
                         Swal.fire({
                              title: "Added!",
                              text: "Your Craft has been Add Successfully.",
                              icon: "success"

                         });
                         form.reset()
                    }
               })
  }
     return (
          <div className="px-24 py-8 bg-gray-50">
               <div>
                    <h1 className="text-3xl mb-4 font-bold text-blue-600 text-center"> Add Craft Item  </h1>
               </div>
               <form onSubmit={handleCraftfrom} action="">
                    <div className="flex gap-6">
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Email</span>
                              </label>
                              <div className="join">

                                   <input className="input input-bordered text-sm w-full join-item" type="email" name="email" placeholder='Email Please' defaultValue={user?.email} disabled required/>

                              </div>

                         </div>
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'>  Name
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="name" className="input input-bordered text-sm w-full join-item" placeholder=" Your Name" defaultValue={user?.displayName} disabled/>

                              </div>

                         </div>
                    </div>
                    <div className="flex gap-6">
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> Image ( use image URL)</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="photo"  className="input input-bordered text-sm w-full join-item" placeholder="Photo URL" />

                              </div>

                         </div>
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> item_name
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="item_name" className="input input-bordered text-sm w-full join-item" placeholder="item_name" />

                              </div>

                         </div>
                    </div>
                    <div className="flex gap-6">
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '> subcategory_Name
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="subcategory_name" className="input input-bordered text-sm w-full join-item" placeholder="subcategory_Name" />

                              </div>

                         </div>
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> short description

                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="shortdescription" className="input input-bordered text-sm w-full join-item" placeholder="short description" />

                              </div>

                         </div>
                    </div>
                    <div className="flex gap-6">
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>price</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="price" className="input input-bordered text-sm w-full join-item" placeholder="Price" />

                              </div>

                         </div>
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'> rating
                                   </span>
                              </label>
                              <div className="join">

                                   <input type="text" name="rating" className="input input-bordered text-sm w-full join-item" placeholder=" ratining" />

                              </div>

                         </div>
                    </div>
                    <div className="flex gap-6">
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text text-lg '>processing_time</span>
                              </label>
                              <div className="join">

                                   <input type="text" name="processing_time" className="input input-bordered text-sm w-full join-item" placeholder="Processing time" />

                              </div>

                         </div>
                         <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'>
                                        customization
                                   </span>
                              </label>
                              <div className="join">
                                   <select name="customization" className="select select-primary w-full ">
                                        <option selected>yes  </option>
                                      
                                        <option> no</option>

                                   </select>


                              </div>

                         </div>
                    </div>
                    <div className='form-control w-1/2'>
                              <label htmlFor="" className='label'>
                                   <span className='label-text  text-lg'>
                                   stockStatus
                                   </span>
                              </label>
                              <div className="join">
                                   <select name="stockstatus" className="select select-primary w-full ">
                                        <option selected> In stock </option>
                                      
                                        <option> Made to Order</option>

                                   </select>


                              </div>

                         </div>
                    <div className="text-center mt-9 ">  <input className=" btn text-white btn-success mt-2 w-full text-xl" type="submit" value="Add"  /> </div>
               </form>
          </div>
     );
};

export default AddItems;