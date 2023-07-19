import {useContext} from 'react'
import { ThemeContext } from './Themecontext'
import { Outlet, Navigate ,useLocation } from 'react-router-dom'


const Authenticate =()=>{
    const location =useLocation()
    const{user}=useContext(ThemeContext)
    console.log("Authenticate", user)
    return(
        <>
        {
            user ? <Outlet/>:<Navigate to="/login" state={{from:location}}
            replace/>
        }
        </>
    )
}
export default Authenticate
