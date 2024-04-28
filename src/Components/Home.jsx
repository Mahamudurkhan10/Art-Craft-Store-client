import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Card from "./Card";

import CardCollection from "./CardCollection";



const Home = () => {
     const crafts = useLoaderData()   
     
     
   
     return (
          <div> 
               
               <Banner> </Banner>
               <div className=" mt-5 mb-6 w-1/2 mx-auto text-center">
                    <h1 className=" text-3xl font-extrabold mb-2"> Art & Craft Store Features </h1>
                    <p > Serve snacks and drinks in style with this elegant serving tray featuring a wooden base and jute handles </p>
               </div>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
             {
               crafts.slice(0,6).map(  craft => <div key={craft._id} > 
               <Card  craft={craft} ></Card>
             
                </div>)
              }

             </div>
               <div>
                     <div className="text-3xl font-extrabold text-center mt-6 text-green-600">
                         <h1>Art & Craft Categories   </h1>
                     </div>
                   <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2 ">
                   {
                         crafts.slice(0,6).map( craft => <div key={craft._id}> 
                              <CardCollection craft={craft}></CardCollection>
                         </div> )
                    }
                   </div>
               </div>

          </div>
     );
};

export default Home;