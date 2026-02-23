import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductCatalog from "../data/productCatalog";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useCart } from "../components/Cart and Checkout/CartContext";
import SkeletonLoader from "../components/SkeletonLoader/SkeletonLoader.jsx";
const ProductsPage = ()=>{
    const {addToCart} = useCart();
    // Combine all product categories into a single array
    const allProducts = Object.values(ProductCatalog).flat();

    const [orderId,setOrderId] = useState(null);
    const [imageLoaded, setImageLoaded] = useState({});
    const navigate = useNavigate();
   const {showProductDetails} = useCart();

    const handleImageLoad = (id) => {
      setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    const [filterType,setFilterType] = useState("");
    const [showDropDown,setShowDropDown] = useState(false);

    const handleFilterOPtion =(type)=>{
        setFilterType(type);
        setShowDropDown(false);
    }

    // using useMemo to only recalculate when dependencies change
    var filteredProducts = useMemo(()=>{
        var CopyProducts = [ ...allProducts]; //avoided mutating

            switch(filterType) {
                case "NameAsc":
                    return [ ...CopyProducts].sort( (a,b)=> a.title.localeCompare(b.title) );
                case "NameDesc":
                    return [ ...CopyProducts].sort( (a,b)=> b.title.localeCompare(a.title) );
                case "PriceLow":
                    return [ ...CopyProducts].sort((a,b) => a.price-b.price);
                case "PriceHigh":
                    return [ ...CopyProducts].sort((a,b) => b.price-a.price);
                /*case "Newest":    bcx we dont have date on our products
                    return new Date(a.)
                case "Oldest"
                    return */
                default:
                    return CopyProducts;    
            }

    
    },[filterType,allProducts] );

    console.log(showDropDown);
    return(
        
        <div>
            <div className="container pt-10">
                <li className='group relative cursor-pointer list-none'>
                    <button className='flex items-center justify-around w-[12rem] bg-primary/40 hover:bg-amber-100 p-1 rounded-md'
                    onClick={()=> { setShowDropDown(true) ; console.log(showDropDown);}}
                    >

                        {filterType
                        ? `Filter: ${
                              filterType === "NameAsc"
                                  ? "Name [A-Z]"
                                  : filterType === "NameDesc"
                                  ? "Name [Z-A]"
                                  : filterType === "PriceLow"
                                  ? "Price: Low to High"
                                  : filterType === "PriceHigh"
                                  ? "Price: High to Low"
                                  : "Filter By"
                          }`
                        : "Filter By"}
                        <FaFilter></FaFilter>
                    </button>
                    {showDropDown && (
                    <div 
                    className={`absolute z-[9999] ${
                        showDropDown ? "block" : "hidden"
                      } rounded-md w-[12rem] bg-white py-2 px-2 text-black shadow-md`}
                    >
                        <ul>
                             <li>
                                <button 
                                  onClick={() => handleFilterOPtion("NameAsc")}
                                  className='block w-[10rem] hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Name [A-Z]
                                </button>
                                <button 
                                  onClick={() => handleFilterOPtion("NameDesc")}
                                  className='block w-[10rem] hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Name [Z-A]
                                </button>
                                <button 
                                  onClick={() => handleFilterOPtion("PriceLow")}
                                  className='block w-[10rem] hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Price: Low to High
                                </button>
                                <button 
                                  onClick={() =>  handleFilterOPtion("PriceHigh")}
                                  className='block w-[10rem] hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Price: High to Low
                                </button>
   
                            </li>
                        </ul>
                    </div> 
                    )
                    }   
                </li>

            </div>

             <div className="container flex flex-col items-center gap-5 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-5">
                    {/* Products List  */}
                    {filteredProducts.map((item,index) => (
                        //Added index as a key instead of item id for correct render order , so that filter works properly
                        <div key={index} onClick={()=>showProductDetails(item.id)} className="cursor-pointer flex flex-col items-center justify-center border-2 md:w-max w-80 shadow-lg rounded-lg p-2 gap-2">
                            {!imageLoaded[item.id] && <SkeletonLoader variant="product-card" />}
                            <img src={item.img}
                                className="w-[15rem] h-[12rem] "
                                onLoad={() => handleImageLoad(item.id)}
                                style={{ display: imageLoaded[item.id] ? 'block' : 'none' }}
                            ></img>
                            <div>
                                <h1>Name:{item.title}</h1>
                                <p>Price: {item.price}</p>
                                <p>Discount: {item.discountPercentage}%</p>
                            </div>
                            {orderId === item.id ?

                            <div className="flex items-center justify-between w-full">
                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={(e)=> {e.stopPropagation();addToCart(item)}}
                            >Add To Cart</button>
                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={(e)=> {addToCart(item); e.stopPropagation(); navigate('/cart')} }
                            >Buy Now</button>
                            </div>
                            :

                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={(e)=> {e.stopPropagation(); setOrderId(item.id)}}
                            >Order Now</button>
                            
                            }
                            
                        </div>
                    ))}
                </div>
           </div>
        </div>
    );
}
export default ProductsPage;