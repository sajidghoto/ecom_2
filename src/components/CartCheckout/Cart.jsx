import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Checkout from "./Checkout.jsx";
import { useCart } from "./CartContext.jsx";
const Cart = () => {

    const {cartItems,addToCart,removeFromCart,clearCart} = useCart();
    const navigate = useNavigate();

    const [openCheckout,setOpenCheckout] = useState(false);
    
    return  openCheckout ? (  <Checkout setOpenCheckout={setOpenCheckout}/>) 
    :
    (

            <div id="cart" className="container flex flex-col items-center justify-center w-full bg-white backdrop-blur-sm dark:bg-gray-800 p-3 md:rounded-lg overflow-x-auto shadow-lg pt-10">

                <div className=" text-center mb-10 w-full">
                    <div className="flex items-center justify-between p-2">
                        
                        <h1 className="text-black dark:text-white md:text-3xl text-xl font-bold">Your Cart</h1>
                        <IoCloseCircleOutline onClick={()=> navigate('/')} className="cursor-pointer text-2xl dark:text-white text-gray-500 hover:text-gray-800"/>
                    </div>
                    <p className="text-slate-400 text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi</p>
                </div> 
                <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 place-items-center gap-5 overflow-y-auto w-full"
                >
                    {/* Cart Items will be displayed here */}
                    { console.log(cartItems) }
                    {cartItems.length > 0 ? cartItems.map((item) => (
                        <div key={item.id}  className="flex flex-col items-center justify-center text-black dark:text-white gap-5">

                            <div className="flex items-center justify-center gap-5 border px-5 border-primary">
                                <img src={item.img} alt={item.title} className="w-20 h-20 rounded-full" />
                                <div className="flex flex-col items-center justify-between gap-5">
                                    <h1>{item.title}</h1>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                    <div className="flex items-center justify-between gap-5 p-3">
                                        <button onClick={()=>addToCart(item)}
                                            className="bg-green-500 text-white text-xl w-5 text-center rounded-full"
                                        >+</button>
                                        <button onClick={()=>removeFromCart(item)}
                                            className="bg-red-500 text-white text-xl w-5 text-center rounded-full"    
                                        >-</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                    : <div className="container flex flex-col items-center gap-5">
                        <h1>Cart is empty</h1>
                    </div>

                    }
                    
                </div>
                <div className="flex items-center justify-between md:gap-5 py-5 text-sm gap-2 md:text-lg">
                        <button className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap'
                            onClick={()=> navigate('/')}>
                            Continue Shopping</button>
                        <button className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap'
                            onClick={() => setOpenCheckout(true)}>
                        Checkout</button>
                        <button className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap'
                            onClick={() => clearCart()}>
                        Clear Cart</button>
                </div>
            </div>
       
           
    )
    
};
export default Cart;