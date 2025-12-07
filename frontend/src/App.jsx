import { Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NavBar from "./components/NavBar"
import "./CSS/App.css"
import { useState } from "react"
import { MovieProvider } from "./contexts/MovieContext"
import MoviePage from "./pages/MoviePage"
import { MovieView } from "./contexts/MovieView"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { UserProvider } from "./contexts/UserContext"


const App=()=>{

    const [loginStatus, setLoginStatus] = useState(false);
    const [createStatus, setCreateStatus] = useState(true);
    console.log(loginStatus,createStatus)
    if (!loginStatus) {
        return <UserProvider><Login setLoginStatus={setLoginStatus} setCreateStatus={setCreateStatus}/></UserProvider>
    }
    
    if(!createStatus ){
        return <Register setCreateStatus={setCreateStatus} setLoginStatus={setLoginStatus}/>
    }

   
    return (<UserProvider>
        <MovieProvider > 
            <MovieView >     
                <NavBar/>
                <main className="main-content">
                    <Routes>
                        
                        <Route path="/" element={<Home/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/movieoverview" element={<MoviePage />}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </main>
            </MovieView> 
        </MovieProvider>
    </UserProvider>
        )

}
                                                        
export default App