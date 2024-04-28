import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
     const {user, loading} = useContext(AuthContext)
     const  location = useLocation()
     if(loading){
          return <div>


          </div>
     }
     if(user){
          return children;
     }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

export default Private;