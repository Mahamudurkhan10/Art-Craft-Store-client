
const CardCollection = ({ craft }) => {
     const { photo, item_name, customization, processing_time, stockstatus, subcategory_name, shortdescription, rating, price } = craft;
     return (
          <div className="mt-9">
               <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-2xl">
                    <img
                         alt=""
                         src={photo}
                         className="absolute inset-0 size:[300px] object-cover"
                    />

                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                         <div className="p-4 sm:p-6">
                              <h1 className=" text-white text-xl font-bold"> {item_name} </h1>
                              <h1 className="text-lg text-white"> {subcategory_name} </h1>
                             
                                   <h3 className="mt-0.5 text-lg text-white"> Price : {price} </h3>
                              

                              
                         </div>
                    </div>
               </article>
          </div>
     );
};

export default CardCollection;