import React, { useContext } from "react";
import { createContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();


export const CartProvider = ({children})=>{
    
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState(() => {
        // Load cart items from localStorage on initialization
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart items to localStorage whenever they change
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleOrderNowBtn = (isLoggedIn)=>{
        if(isLoggedIn)
            navigate('/cart');
        else
            navigate('/login');
    }

    const showProductDetails = (id) => {
        navigate(`/product/${id}`);
        window.scroll({top:0,behavior:'smooth'});
    };
    useEffect(() => {
        console.log("Cart items updated:", cartItems);
    }, [cartItems]);
    
    const addToCart = (item) => {
       
        setCartItems((prevCartItems ) => {
            const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
            if(existingItem){
                return prevCartItems.map(cartItem => {
                    return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
                })
            }else{
                return [...prevCartItems, {...item,quantity: 1}];
            }
        })
        
    }
    const removeFromCart = (item) => {
        cartItems.length >0 && setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if(existingItem.quantity > 1){
            setCartItems(cartItems.map(cartItem => {
                return cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity -1} : cartItem
            }))
        }else
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    }
    const clearCart = () => {
        console.log("clearcart")
        setCartItems([]);
    }
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
    }

    //Issue resolved
    return(
        <CartContext.Provider 
        value={{cartItems,setCartItems,addToCart,removeFromCart,clearCart,getTotalPrice,handleOrderNowBtn,showProductDetails}}>
            {children}
        </CartContext.Provider>
    )
    
}

export const useCart=()=> useContext(CartContext);