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
      element:<AllItems></AllItems>
    },
    {
      path:'/addcrafts',
      element:<AddItems></AddItems>

    },{
      path:'/myArtCraftlist',
      element:<MycraftList></MycraftList>
    },
    {
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register></Register>
    }
  ]
  },   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
