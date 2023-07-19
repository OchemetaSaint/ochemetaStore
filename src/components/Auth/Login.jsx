import { BiUser, BiSolidLock } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import "./AuthStyle.css"
import bgImage from "../../assets/bg.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/ProductState'
import { SpinnerCircular } from 'spinners-react'


const Login = () => {
    const nav = useNavigate()
    const [load, setLoad] = useState(false)
    const Dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    // const [disable, setDisable] = useState(false)

    // const [message, setmessage] = useState({error:false, value: "",  msg:""})

    const data = { email, password }
    const url = "https://eflexshop.onrender.com/user/login"

    const Login = (e) => {
        setLoad(true)
        e.preventDefault()
        axios.post(url, data)
            .then(res => {
                console.log(res)
                Dispatch(userData(res.data.data))
                // disable(true)
                nav("/")
            })
            .catch((err) => {
                console.log(err)
        // setLoading(!loading)
        // setDisable(false)
                // setmessage({error:true, value: "email", msg: err.response.data.errors[0].msg})
            })

    }


    return (
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
                                <h1>Login</h1>
                            </div>
                            <h3>"Get ready for a delightful shopping experience!</h3>

                        </div>

                        <div className="login-page">
                            <form>
                                <div className="login">
                                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <BiUser className='user' />
                                </div>
                                <div className="login">
                                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <BiSolidLock className='user' />
                                    <AiFillEye className='eyes' />
                                </div>

                                <h5>Forget Password</h5>

                                <button className='Btn' onClick={(e) => Login(e)}>{!setLoading ? <SpinnerCircular size={30} /> : "Login"}</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login