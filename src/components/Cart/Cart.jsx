
import "./Cart.css";
import {AiOutlinePlus, AiOutlineMinus, AiFillDelete} from "react-icons/ai"
import {useSelector } from 'react-redux'
import { removeCart, minusQty, QTY } from '../Redux/ProductState'
import { addToCart } from "../Redux/ProductState";
import {  useDispatch } from 'react-redux';


const Cart = () => {
    // const[plusone , setplusone] = useState (1)
    const Dispatch = useDispatch();
    const Cart = useSelector((state)=> state.persisitedReducer.addcart)

    const addQty = (item) => {
        Dispatch(addToCart(item)); // Call the addToCart action with the item to increase its quantity
      };
      
      const removeQty = (item) => {
        Dispatch( minusQty(item)); // Call the removeCart action with the item to decrease its quantity
      };

      const calculateTotalQuantity = () => {
        return Cart.reduce((total, item) => total + item.QTY, 0);
      };

      const calculateTotalPrice = () => {
        return Cart.reduce((total, item) => total + item.price * item.QTY, 0);
      };
    
    return (
        <div className="shopping-cart" style={{ overflow: "scroll" }}>
            <div className="title">
                <h3>Your Cart, You've Got ({Cart.length}) items in it</h3>
            </div>
                   {
                    Cart?.map((props)=>(
                        <div className="item" key={props.id} >
                        <div className="buttons">
                                <AiFillDelete className="Delete" onClick={()=> Dispatch(removeCart(props))}/>
                        </div>
                        <div className="image">
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={props.image}
                                alt=""
                            />
                        </div>
                        <div className="description">
                            <h3 style={{fontSize: "10px"}}>{props.title}</h3>
                            {/* <span>color</span> */}
                        </div>
                       <div className="quantity">
          <button
            className="plus-btn"
            type="button"
            name="button"
            onClick={() => addQty(props)} // Call addQty with the item when the "+" button is clicked
          >
            <AiOutlinePlus />
          </button>
          <span style={{ margin: "5px 10px" }}>
            <p>{props.QTY}</p>
          </span>
          <button
            className="minus-btn"
            type="button"
            name="button"
            onClick={() => removeQty(props)} // Call removeQty with the item when the "-" button is clicked
          >
            <AiOutlineMinus />
          </button>
        </div>
                        <div className="total-price">#{props.price}</div>
                    </div>
                    ))
                   }
            <div
                className="order-summary"
                style={{
                    display: "flex",
                    width: "250px",
                    height: "200px",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "column",
                    background: "lightblue",
                    position: "absolute",
                    right: "0",
                    top: "400px",
                }}
            >
                <h2>Order Summary</h2>
                <h3>Total Quantity:{calculateTotalQuantity()}</h3>
                <h3>Total Price:= {calculateTotalPrice()}</h3>
                <button style={{ padding: "10px" }}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
