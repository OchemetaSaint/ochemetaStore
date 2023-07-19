import {BiSolidLock} from 'react-icons/bi'
// import {BsCart4} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
// import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
// import {FiFacebook, FiTwitter, FiBookOpen} from 'react-icons/fi'
import bgImage from "../../assets/bg.jpg"
import { SpinnerCircular } from 'spinners-react';
import axios from 'axios'
import "./AuthStyle.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/ProductState'
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const Dispatch = useDispatch()
    const nav = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [load, setload] =useState(false)
    const [confirm, setConfirm] = useState('');
    const [message, setmessage] = useState({error:false, value: "",  msg:""})
    const [loading, setLoading] = useState(false)


    const data = {name, email, password};
    console.log(data)

    const url = "https://eflexshop.onrender.com/user/register"

    // const FromErorr = () => {

    // }
  

    const Signup = (e)=>{
        e.preventDefault()
        setload(true)
        if(!name){
            setmessage({error:true, value: "name", msg:"*Input your name"})
        setLoading(false)
            // setmessage("")
        } else if(!email){
            setmessage({error:true, value: "email", msg:"*Input your email"})
        setLoading(false)
            // setmessage("")
        }else if(!password){
            setmessage({error:true, value: "password", msg:"*Input your password"})
        setLoading(false)
        }else if(!confirm){
            setmessage({error:true, value: "cpas", msg:"*Input your confirmPassword"})
        setLoading(false)
        }else if(password !== confirm){
            setmessage({error:true, value: "paasworderror", msg:"*password does not match"})
        setLoading(false)
        }else if(password.length < 8){
            setmessage({error:true, value: "passlenght", msg:"* your password most be 8 c"})
            setLoading(false)
        }
        else{
            setmessage("")
        setLoading(true)

        axios.post(url,data)
        .then(res=> {
            console.log(res)
            Dispatch(userData(res.data.data))
            nav("/")
        })
        .catch((err)=>{
            console.log(err.response.data.errors)
            setmessage({error:true, value: "email", msg: err.response.data.errors[0].msg})
            setLoading(false)
        })

        }


        
    }

    // console.log(message)

    return(
     <div className='AuthBody'>
         <div className="container">
       <div className="holder">
        <div className="left">
        <img src={bgImage} alt=""></img>
        </div>
        <div className="right">
            <div className="description">
                <div className='logo'>
                {/* <BsCart4 className='cart'/> */}
                <h1>Sign UP</h1>
                </div>
               <h3>Get ready for a delightful shopping experience!</h3>
                
            </div>

            <div className="login-page">
                <form>
                    <div className="login">
                        <input type="text" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)}/>
                        <AiOutlineMail className ='user'/>
                            {message.value === "name" ?
                            <p style={{color:"red", fontSize:"10px", marginLeft:"5px"}}>{message.msg}</p> : null
                        }
                    </div>

                    <div className="login">
                        <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                        <AiOutlineMail className ='user'/>
                        {message.value === "email" ?
                            <p style={{color:"red", fontSize:"10px", marginLeft:"5px"}}>{message.msg}</p> : null
                        }
                    </div>

                    <div className="login">
                        <input type="password" placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                        <BiSolidLock className='user'/>
                        <AiFillEye className='eyes'/>
                        {message.value === "password" ?
                            <p style={{color:"red", fontSize:"10px", marginLeft:"5px"}}>{message.msg}</p> : null
                        }
                    </div>

                    <div className="login">
                        <input type="password" placeholder="confirm-password" value={confirm}  onChange={(e) => setConfirm(e.target.value)}/>
                        <BiSolidLock className='user'/>
                        <AiFillEye className='eyes'/>
                        {message.value === "cpass" ?
                            <p style={{color:"red", fontSize:"10px", marginLeft:"5px"}}>{message.msg}</p> : null
                        }
                         {message.value === "paasworderror" ?
                            <p style={{color:"red", fontSize:"10px", marginLeft:"5px"}}>{message.msg}</p> : null
                        }
                        
                         {message.value === "passlenght" ?
                            <p style={{color:"red", fontSize:"10px", marginLeft:"5px"}}>{message.msg}</p> : null
                        }

                    </div>

                    <h5 className='Forget'>Forget Password</h5>

                    <button className='Btn' onClick={(e)=>Signup(e)}>{setLoading?<SpinnerCircular size={30}/> : "Sign up"} </button>
                  </form>

              
            </div>
        </div>
       </div>
      </div>
     </div>
    )
  }
  
  export default Login