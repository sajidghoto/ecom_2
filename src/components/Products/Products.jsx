import { FaStar } from "react-icons/fa";
import { useState } from "react";

import ProductsData from "../../data/Products.js";
import { useParams } from "react-router-dom";
import { useCart } from "../Cart and Checkout/CartContext.jsx";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader.jsx";
  
const Products = ({orderId,setOrderId,navigate}) => {
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };
  
  const id = useParams();
  const {addToCart,showProductDetails} = useCart();
    return (
        <div id="top-selling-products" className="pt-10 dark:bg-gray-800 dark:text-white bg-white min-h-screen">
            {/* Header Section */}
            <div className="container text-center mb-10">
                <p className="text-md text-secondary" data-aos='fade-up'>Top Selling Products</p>
                <h1 className=" text-black dark:text-white text-3xl font-bold" data-aos='fade-up'>Products</h1>
                <p className="text-slate-400 text-xs" data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>

            {/* Products Section */}
            <div className="container flex flex-col items-center gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-5">
                    {/* Products List  */}
                    { ProductsData.map((data)=>(
                        <div key={data.id} className="space-y-3 cursor-pointer"
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay}
                            onClick={()=>showProductDetails(data.id)}
                        >
                            {!imageLoaded[data.id] && <SkeletonLoader variant="product-card" />}
                            <img className="h-[220px] w-[150] object-cover rounded-md"
                            src={data.img}
                            alt={data.title}
                            onLoad={() => handleImageLoad(data.id)}
                            style={{ display: imageLoaded[data.id] ? 'block' : 'none' }}
                            />
                            <div className="flex items-center justify-left gap-5 px-3">
                              <div className="flex flex-col items-center justify-center sm:text-center md:text-left md:items-start">
                              <h1 className="font-semibold text-lg sm:text-md text-nowrap">{data.title}</h1>
                              <p className="text-xl sm:text-lg">{data.color}</p>
                            </div>

                            <div className="px-3">
                              <div className="flex items-center gap-1 sm:text-xl">
                                  <FaStar className="text-yellow-400"/>
                                  <span className="text-xl sm:text-lg">{data.rating}</span>
                              </div>
                              <p className="text-lg sm:text-md font-semibold text-nowrap">Rs {data.price}</p>
                              </div>
                            </div>

                            {orderId === data.id ?

                              <div className="flex items-center justify-between w-full">
                              <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                  onClick={(e)=>{e.stopPropagation(); addToCart(data)}}
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
                    ))}
                </div>
                <button className="mt-10 w-[100] h-[50] p-1.5 px-2 bg-primary text-white rounded-full cursor-pointer"
                  onClick={()=> navigate('/products')}
                >View All Products</button>
            </div>
        </div>
    );
}

export default Products;