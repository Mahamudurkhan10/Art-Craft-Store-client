import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import {  createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

 export const AuthContext = createContext()


const Auth = ({children}) => {
     const [user,setUser] = useState(null)
     const [loading, setLoading]= useState(true)
     const googleProvider = new GoogleAuthProvider();
     const googleLogin = ()=>{
          setLoading(true)
          return signInWithPopup(auth,googleProvider)
     }
     const logOut = ()=>{
          setLoading(true)
          return signOut(auth)
     }
     useEffect(()=>{
          const unFollow = onAuthStateChanged(auth,currentUser =>{
               setUser(currentUser)
               setLoading(false)
          })
          return ()=>{
               unFollow
          }
     },[])
     const authInput = {
          googleLogin,
          user,
          loading,
          logOut
     }
     return (
         <AuthContext.Provider value={authInput}> {children} </AuthContext.Provider>
     );
};

export default Auth;