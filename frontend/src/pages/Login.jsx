import "../CSS/Login.css"
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";

const Login = ({setLoginStatus, setCreateStatus}) =>{
    const {getUser}=useUserContext() 
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [user, setUser]=useState('')
    const [loginMessage, setLoginMessage]=useState("")
    const fetchUser= async ()=>{
        
        if (username.trim()==="" || password.trim()==="" ){
            
            setLoginMessage("username or password cant be empty")
            return
        }

        const url = `http://localhost:8080/login/${encodeURIComponent(username)}`
        const response=await fetch(url)
        if (!response.ok) {
        setLoginMessage(`server error: ${response.status}`);
        return;
        }
        if(response.status===200){
            const data= await response.json()
            
            if (!Array.isArray(data) || data.length===0){
               
                setLoginMessage("user does not exist")
                return 
            }
            const fetchedUser=data[0]
            setUser(data[0])
            console.log(user)
            if (fetchedUser.password!==password){

                console.log(fetchedUser.password,password, user)
                setUser("")
                setLoginMessage("incorrect password")
               
                return 
            }

            setLoginStatus(true)
            getUser(fetchedUser)



        
        }
        

        
       
        

    }

    const onLoginHandler=()=>{
          fetchUser()
    }

    const onRegisterHandler = ()=>{
        setCreateStatus(false)
        setLoginStatus(true)
    }







    return <div className="login-page">
            <div className="login-box">
                <h2 id="login-title">Login</h2>
                
                <div className="login-form">
                    <div className="username-box">
                        <label htmlFor="username">Username/email</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>

                    <div className="password-box">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <p id="login-message">{loginMessage}</p>
                    <div className="login-btn-box">
                        <button onClick={()=>onLoginHandler()}className="login-btn">Login</button>
                    </div>
                </div>

                <div className="register-box">
                    <p>Don't have an account?</p>
                    <button onClick={()=>onRegisterHandler()} className="register-btn">Register</button>
                    <label>Register Here</label>
                </div>
            </div>
        
        
        </div>
}
export default Login;