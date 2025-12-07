
import { useState,useEffect } from "react"
import { useUserContext } from "../contexts/UserContext"




const Profile=()=>{
    const {user} = useUserContext()

    if(!user){
        return<>
        <h3>loading...</h3>
        </>        
    }

    return <div>
        
        <p>This is the profile page.</p>
        <h2>{user.id}{user.username} {user.email}</h2>
    </div>
}
export default Profile;