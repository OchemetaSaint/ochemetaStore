import React, { useState } from 'react'
import "./HeaderStyle.css"
import {AiOutlineSearch, 
    AiFillHeart, 
    AiOutlineShoppingCart,
    AiOutlineUserAdd
} from "react-icons/ai"
import {useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import { signOut } from '../Redux/ProductState'
import { useDispatch } from 'react-redux';


const Header = () => {
    const nav = useNavigate()
    const Dispatch = useDispatch()
    const [showLogInfo, setShowLogInfo] = useState(false)
    const Cart = useSelector((state)=> state.persisitedReducer.addcart)
    const user = useSelector((state)=> state.persisitedReducer.user)
    console.log(user)

  return (
    <div className='HeaderBody'>
        <div className="HeaderWrapper">
           <Link to="/" ><h2>OCHE <span>META</span></h2></Link>
            <nav>
                <ul>
                    <Link to="/" style={{color: "black"}}>
                    <li>Home</li>
                    </Link>
                    <Link to="/product" style={{color: "black"}}>
                    <li>Product</li>
                    </Link>
                    <Link to="/service" style={{color: "black"}}>
                    <li>Service</li>
                    </Link>
                    <Link to="/contact" style={{color: "black"}}>
                    <li>Contact</li>
                    </Link>
                </ul>
            </nav>

            <div className='HeaderIcons'>
                <AiOutlineSearch className='HeaderIconsIcon'/>
                <AiFillHeart className='HeaderIconsIcon'/>
               <div className='cartIcon' onClick={()=> nav("/cartpage")}>
               <AiOutlineShoppingCart className='HeaderIconsIcon ' onClick={()=> nav("/cartpage")}/>
                <div className='cartIconBox'>{user?<>{Cart.length}</> : 0}</div>
               </div>
               {
                user? <div className='UserBigBox' onMouseOver={()=>setShowLogInfo(!showLogInfo)}>
                       {user.name?.charAt(0)} 
                </div> : <AiOutlineUserAdd className='HeaderIconsIcon' onMouseOver={()=>setShowLogInfo(!showLogInfo)}/>
               }
              {
                showLogInfo?  
                <div className='Reg' onMouseLeave={()=> setShowLogInfo(false)}>
                    <ul className='RegUl'>
                        {
                            user? <>
                                <li onClick={()=> Dispatch(signOut())}>Sign out</li>
                            </> : 
                            <>
                            <Link to="/login" style={{color: "black"}}>
                            <li>Log in</li>
                        </Link>
                        <Link to="/signup" style={{color: "black"}}>
                        <li>Sign up</li>
                        </Link>
                            </>
                        }
                    </ul>
                </div> : null
              }
            </div>

        </div>
    </div>
  )
}

export default Header