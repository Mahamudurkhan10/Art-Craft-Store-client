import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Components/Home';
import AllItems from './Layout/AllItems';
import AddItems from './Layout/AddItems';
import MycraftList from './Layout/MycraftList';
import Login from './Components/Login';
import Register from './Components/Register';
import Auth from './AuthProvider/Auth';
import CardDetails from './Layout/CardDetails';
import Update from './Layout/Update';
import Private from './Pages/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:'/',
      element: <Home></Home>,
      loader:()=> fetch('http://localhost:5000/craft')
    },
    {
      path:'/allartCraftItems',
      element:<AllItems></AllItems>,
      loader:()=> fetch('http://localhost:5000/craft')
    },
    {
      path:'/addcrafts',
      element:<Private><AddItems></AddItems></Private>

    },{
      path:'/myArtCraftlist',
      element:<Private><MycraftList></MycraftList></Private>
    },
    {
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/view/:id',
      element: <Private><CardDetails></CardDetails></Private>,
      loader: ({params})=> fetch(`http://localhost:5000/view/${params.id}`)
    },
    {
      path:'/update/:id',
      element: <Update></Update>,
      loader:({params})=> fetch(`http://localhost:5000/craft/${params.id}`)

    }
  ]
  },   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth>  <RouterProvider router={router} /> </Auth>
  </React.StrictMode>,
)
