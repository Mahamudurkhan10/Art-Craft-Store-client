

const Review = () => {
     return (
          <div className="text-3xl font-bold m-5 text-green-600 text-center" >
                <h1> Customer Review </h1>
           <div className="grid gap-7 mt-8  grid-cols-1 lg:grid-cols-3">
           
               <div className="container flex flex-col w-full max-w-lg hover:shadow-xl p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                         <div className="flex space-x-4">
                              <div>
                                   <img src="https://i.ibb.co/8cMB4Kg/young-male-employee-much-work-260nw-2172020397.webp" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                              </div>
                              <div>
                                   <h4 className="font-bold text-xl ">Mahamudur khan</h4>
                                   <span className="text-xs dark:text-gray-600">4 days ago</span>
                              </div>
                         </div>
                         <div className="flex items-center space-x-2 dark:text-yellow-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                              </svg>
                              <span className="text-xl font-bold">4.5</span>
                         </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                         <p>Wooden utensils and kitchenware, such as spoons, spatulas, and cutting boards, offer a natural and eco-friendly alternative to plastic or metal counterparts.</p>
                         <p>Unlike plastic utensils, wooden kitchenware is biodegradable and renewable, making it a sustainable choice for eco-conscious consumers.</p>
                    </div>
               </div>
               <div className="container flex flex-col w-full max-w-lg hover:shadow-xl p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                         <div className="flex space-x-4">
                              <div>
                                   <img src="https://i.ibb.co/XCsm8p9/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profil.webp" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                              </div>
                              <div>
                                   <h4 className="font-bold text-xl">Leroy Jenkins</h4>
                                   <span className="text-xs dark:text-gray-600">4 days ago</span>
                              </div>
                         </div>
                         <div className="flex items-center space-x-2 dark:text-yellow-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                              </svg>
                              <span className="text-xl font-bold">4.5</span>
                         </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                         <p>Wooden utensils and kitchenware, such as spoons, spatulas, and cutting boards, offer a natural and eco-friendly alternative to plastic or metal counterparts.</p>
                         <p>Unlike plastic utensils, wooden kitchenware is biodegradable and renewable, making it a sustainable choice for eco-conscious consumers.</p>
                    </div>
               </div>
               <div className="container flex flex-col hover:shadow-xl w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-black">
                    <div className="flex justify-between p-4">
                         <div className="flex space-x-4">
                              <div>
                                   <img src="https://i.ibb.co/Jtrdv5b/attractive-woman-working-office-laptop-beautiful-96442528.webp" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                              </div>
                              <div>
                                   <h4 className="font-bold text-xl"> sanjida  </h4>
                                   <span className="text-xs dark:text-gray-600">2 days ago</span>
                              </div>
                         </div>
                         <div className="flex items-center space-x-2 dark:text-yellow-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                   <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                              </svg>
                              <span className="text-xl font-bold">4.3</span>
                         </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                         <p>Crafted from natural jute fibers, these items are biodegradable and renewable, making them an eco-conscious choice for conscientious consumers.</p>
                         <p>Jute utensils often feature a smooth finish, providing a comfortable grip and preventing scratching on cookware surfaces.</p>
                    </div>
               </div>
           </div>
          </div>
     );
};

export default Review;