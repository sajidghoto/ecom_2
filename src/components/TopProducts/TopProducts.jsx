import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import ProductsData from "../../data/TopProducts.js";
import { useCart } from "../Cart and Checkout/CartContext.jsx";
import { useAuth } from "../Auth/AuthContext.jsx";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader.jsx";

const TopProducts = ({orderId,setOrderId,navigate})=>{
    const [imageLoaded, setImageLoaded] = useState({});

    const handleImageLoad = (id) => {
      setImageLoaded(prev => ({ ...prev, [id]: true }));
    };
    
    const {addToCart,showProductDetails} = useCart();
    
    
    return <div id="top-rated" className=" dark:bg-gray-800 dark:text-white pb-10 pt-10 bg-white min-h-screen">

        {/* Header Section */}
        <div className="container text-left mb-24">
                <p className="text-md text-secondary" data-aos='fade-up'>Top Rated Products</p>
                <h1 className=" text-black dark:text-white text-3xl font-bold"data-aos='fade-up'>The Best Products</h1>
                <p className="text-slate-400 text-xs"data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>

        {/* Body Section */}
        <div className="container">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-y-20"
                    //style={{row-gap: '5rem' }}
                >
                    {/* Products List  */}
                    { ProductsData.map((data)=>(
                        <div key={data.id} className="
                        md:pt-1 sm:pt-20 sm:pb-3 pt-20 sm:max-h-[300px] sm:max-w-[300px] w-full
                        rounded-2xl bg-white dark:bg-gray-700 hover:bg-black/80
                        hover:text-white dark:hover:bg-primary shadow-xl relative duration-[300] group flex flex-col items-center justify-center
                        "
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay}
                            onClick={()=>showProductDetails(data.id)}
                        >
                            <div>
                            {!imageLoaded[data.id] && <SkeletonLoader variant="top-product-card" />}
                            <img className="max-w-[140px] block max-auto transform -translate-y-20 
                            group-hover:scale-105 duration-300 drop-shadow-md"
                            src={data.img}
                            alt={data.title}
                            onLoad={() => handleImageLoad(data.id)}
                            style={{ display: imageLoaded[data.id] ? 'block' : 'none' }}
                            />
                            </div>
                            <div className="md:mt-[-5rem] mt-[-6rem]" >
                                <div className="py-4 text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-400"/>
                                        <FaStar className="text-yellow-400"/>
                                        <FaStar className="text-yellow-400"/>
                                        <FaStar className="text-yellow-400"/>
                                    </div>

                                    <h1 className="text-xl text-black font-bold group-hover:text-white ">{data.title}</h1>
                                    <p className="text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2 mb-2">{data.description}</p>
                                    {orderId === data.id ?

                                    <div className="flex items-center gap-5">
                                    <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                        onClick={(e)=> {e.stopPropagation(); addToCart(data)}}
                                    >Add To Cart</button>
                                    <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                        onClick={(e)=> {e.stopPropagation(); addToCart(data); navigate('/cart')} }
                                    >Buy Now</button>
                                    </div>
                                    :

                                    <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                        onClick={(e)=>{e.stopPropagation(); setOrderId(data.id)}}
                                    >Order Now</button>

                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

    </div>
}

export default TopProducts;