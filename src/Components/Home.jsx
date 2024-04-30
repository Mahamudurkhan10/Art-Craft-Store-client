import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Card from "./Card";

import CardCollection from "./CardCollection";

import Review from "./Review";
import Achievement from "./Achievement";
import { useEffect, useState } from "react";



const Home = () => {
     useEffect(()=>{
          document.title = 'Home'
      },[])
     const crafts = useLoaderData()   
     
     const [newCrafts , setNewCrafts]=useState([])
     useEffect(()=>{
          fetch(`https://art-craft-store-server-two.vercel.app/subcraft`)
          .then(res => res.json())
          .then(data =>{
               setNewCrafts(data)
          })
     },[])
   
     return (
          <div className="font-Lato"> 
               
               <Banner> </Banner>
               <div className=" mt-5 mb-6 w-1/2 mx-auto text-center">
                    <h1 className=" text-3xl font-extrabold text-green-700 mb-2"> Art & Craft Store Features </h1>
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
                     <div className=" lg:w-1/2 lg:mx-auto text-center mt-6">
                         <h1 className=" text-3xl  font-extrabold text-green-600">Art & Craft Categories   </h1>
                         <h1> Art and craft projects provide opportunities for collaboration and social interaction, fostering connections within communities and across cultures </h1>
                     </div>
                   <div className="grid lg:grid-cols-3 gap-4  grid-cols-1 md:grid-cols-2 ">
                   {
                         newCrafts.map( craft => <div key={craft._id}> 
                              <CardCollection craft={craft}></CardCollection>
                         </div> )
                    }
                   </div>
               </div>

                    <div>
                         <Review></Review>
                    </div>
                    <div className="mt-9">
                         <Achievement></Achievement>
                    </div>
                   
          </div>
     );
};

export default Home;