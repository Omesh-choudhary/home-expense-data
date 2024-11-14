
import {createContext,useContext, useEffect, useState} from "react"
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();


export const AuthProvider =({children})=>{
 
    const [Token, setToken] = useState(localStorage.getItem("token"));
    const [user, setuser] = useState("")
    const StoreTokenInLs =(serverToken)=>{
        return localStorage.setItem("token",serverToken)

    }

    const LogoutUser= ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    const userAuthentication =async()=>{
        const response = await fetch("https://home-expense-data-backend.onrender.com/api/auth/user",{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${Token}`
            },
        })
        
        
        if(response.ok){
            let User = await response.json()
          setuser(User.UserData)
        }
    }
 
    const [createdUser, setcreatedUser] = useState([])

    const UserData =async()=>{
      let token = localStorage.getItem("token")
      
      let response = await fetch ("https://home-expense-data-backend.onrender.com/api/send/userData",{
        method:"GET",
        headers:{
          "Authorization":`Bearer ${token}`
        },
      })
      let Userdata = await response.json()
      let user = Userdata.user.Data
      
      return setcreatedUser(user)
      
  
  
    }
  


        return <AuthContext.Provider value={{StoreTokenInLs,LogoutUser,user,userAuthentication,UserData,createdUser}}>
         {children}
    </AuthContext.Provider>
}

export const useAuth =()=>{
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth outside the provider")
    }

    return AuthContextValue
}
