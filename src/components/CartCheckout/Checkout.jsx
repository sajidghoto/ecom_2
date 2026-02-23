import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
// import { useAuth } from '../Auth/AuthContext'; // Ensure useAuth is exported properly
import { useNavigate } from 'react-router-dom'; // Added useNavigate
import { useCart } from './CartContext';

const Checkout = ({setOpenCheckout}) => {
    // adding default value to cartItems to avoid undefined error cartItems =[]

        const {cartItems,getTotalPrice} = useCart();

        const handleProceedPayment = ()=>{
            alert("Payement process logic not defined.")
        }
   
        return (
        
        <div id="checkout" className=" dark:bg-gray-800 dark:text-white bg-white min-h-screen pt-10 pb-10 overflow-y-auto h-full">
            <div className="container text-center mb-10">
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center justify-between p-2 w-full"> 
                     <h1 className="text-black dark:text-white text-3xl font-bold">Your Cart</h1>
                     <IoCloseCircleOutline onClick={()=> setOpenCheckout(false)} className="cursor-pointer text-2xl dark:text-white text-gray-500 hover:text-gray-800"/>
                    </div>
                </div>
                <p className="text-slate-400 text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi</p>
            </div>
            <div className="container flex flex-col items-center gap-5 text-sm sm:text-lg">
                {/* Checkout Items will be displayed here */}
                { <table className="border-black rounded-lg shadow-md w-auto">
                        <thead>
                            <tr className="text-left">
                                <th className="px-2 sm:px-4  py-2">Product</th>
                                <th className="px-2 sm:px-4 py-2">Price</th>
                                <th className="px-2 sm:px-4 py-2">Quantity</th>
                                <th className="px-2 sm:px-4 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length>0 && cartItems.map((item) => (
                                <tr key={item.id} className="border-b border-gray-200">
                                    <td className="px-4 py-2">{item.title}</td>
                                    <td className="px-4 py-2">${item.price}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                                
                            ))}
                            <tr className="border-b border-gray-200">
                                <td colSpan="3" className="px-4 py-2 font-bold">Total</td>
                                <td className="px-4 py-2 font-bold">${getTotalPrice().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                }
                <button
                className=' bg-primary transition-all duration-200 text-white py-1 px-4
                rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap border-2 hover:border-primary/10 shadow-lg'
                onClick={()=>handleProceedPayment()}
                >Proceed Payment</button>   
            </div>
            
        </div>    
    
);
}


export default Checkout;