import { useState,useContext, createContext } from "react";


const UserContext = createContext()

export const useUserContext = ()=>useContext(UserContext);

export const UserProvider =({children})=>{

    const [user,setUser]=useState("")
    
    const getUser =(user)=>{

        setUser(user)
        console.log(user,"from user context")
    }

    const value ={
        user,
        getUser,

    }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

}