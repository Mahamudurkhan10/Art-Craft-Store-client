

const Card = ({ craft }) => {
    const {photo,item_name,customization,stockstatus,subcategory_name,shortdescription,rating,price}=craft;
     return (
          <div>
               <div className="card hover:shadow-2xl card-compact p-3 bg-base-100 shadow-sm">
                    <figure><img src={photo} className="size-[300px]" alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">  {item_name} </h2>
                          <p>  {subcategory_name} </p>
                         <div className="card-actions justify-center">
                              <button className="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;