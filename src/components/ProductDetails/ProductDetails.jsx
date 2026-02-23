import React, { useState } from "react";
import AllProducts from "../../data/productCatalog.js";
import { useNavigate, useParams } from "react-router-dom";
import {FaCaretUp} from 'react-icons/fa';
import Slider from 'react-slick';
import { useCart } from "../Cart and Checkout/CartContext.jsx";
import StarRating from "./StarRating.jsx";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader.jsx";
const ProductDetails = ( ) => {
    const {addToCart} = useCart();
    const { id } = useParams();
    const productId = parseInt(id,10);
    var allproducts = Object.values(AllProducts).flat();
    var ratedProduct = AllProducts.find((product) => product.id === productId);
    console.log("Product to find: ",productId)
    console.log("rated product: ",AllProducts.filter((product)=> product.id === productId));
    console.log(AllProducts);
    
    const [imageLoaded, setImageLoaded] = useState({});
    const [showReviews,setShowReviews] = useState(false);
    const handleShowReviews = ()=>{
        setShowReviews(prevState => !prevState);
    }
    const [reviewText,setReviewText] = useState("");
    const [reviews,setReviews] = useState(ratedProduct?.reviews || []);
    const [ReviewDone,setReviewDone] = useState(false);

    const handleImageLoad = (id) => {
      setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    const handleReviewSubmit=(e)=>{
        e.preventDefault();
        if(!reviewText.trim()) return;

        const newReview = {
            reviewerName: 'Anonymous',
            comment: reviewText,
            img: "https://via.placeholder.com/150",

            
        }
        // Update the reviews state
        setReviews((prevReviews) => [...prevReviews, newReview]);
        setReviewText(""); // Clear the textarea
        setReviewDone(true); // Show the thank-you message

        setTimeout(()=>{
            setReviewDone(false);
        },3000)
        
    }
    React.useEffect(()=>{
        console.log("Reviews",reviews.length);
    },[reviews]);    
    const navigate = useNavigate();
    
    const {showProductDetails} = useCart();

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
    const keyword = ratedProduct?.title.split(" ")[0];
    const relatedProducts = Array.from(
        new Map(
            allproducts
                .filter((product) => product.title.includes(keyword) && product.id != ratedProduct.id)
                .map((product) => [product.id, product])
        ).values()
    );
    
    if(ratedProduct){

        return (
            <div className="flex flex-col bg-white dark:bg-[#705227] dark:text-white min-h-screen" >
    
            <div className="sm:container flex flex-col sm:flex-row items-center w-full justify-center gap-2 pt-10 ]">
                <div className="flex items-center justify-center w-full sm:w-[50%]">
                {!imageLoaded[ratedProduct.id] && <SkeletonLoader variant="product-details" />}
                <img className="w-[20rem] h-fit p-2 shadow-2xl"
                    data-aos="zoom-out"
                    data-aos-delay="50000"
                    data-aos-duration='500'
                    data-aos-once="true"
                    src={ratedProduct.img}
                    onLoad={() => handleImageLoad(ratedProduct.id)}
                    style={{ display: imageLoaded[ratedProduct.id] ? 'block' : 'none' }}
                >
                </img>
                </div>

                <div className="sm:w-[50%] w-full h-full flex flex-col px-5 sm:items-start items-center gap-2 text-sm sm:text-lg sm:gap-5">
                    <h2 className="text-2xl font-bold" data-aos="fade-up">{ratedProduct.title}</h2>
                    <p className="text-lg text-gray-700 dark:text-white text-center" data-aos="fade-up">{ratedProduct.description}</p>
                    <p data-aos="fade-up">Color: {ratedProduct.color}</p>
                    <p className="text-xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">Price: ${ratedProduct.price}</p>
                    <p data-aos="fade-up">Discount: {ratedProduct.discountPercentage}%</p>
                    <div className="w-full flex items-start justify-center gap-5">
                        <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                            onClick={()=> addToCart(item) }
                            data-aos="fade-up"
                        >Add to Cart</button>
                        
                        
                        <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                            onClick={()=> {addToCart(ratedProduct); navigate('/cart')}}
                            data-aos="fade-up"
                        >Buy Now</button>
                    </div>
                </div>
                
            </div>

            {/* // Reviews on this Product */}
            <div className="sm:container flex flex-col sm:w-full w-[99vw] max-w-[90vw] items-center justify-center sm:p-10">
                {/* Header */}
                <div className="py-2 border-b border-gray-500" data-aos="zoom-out">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold dark:text-white">Reviews</h1>
                        <div className="flex gap-5">
                            <span className="text-lg font-bold dark:text-white flex items-center gap-5">{ratedProduct.rating} 
                                <StarRating rating={ratedProduct.rating}/>
                            </span>
                            <div className="group" onClick={()=>handleShowReviews()}>
                                <FaCaretUp className="h-5 transition-all duration-200 group-hover:rotate-180"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg font-thin text-black dark:text-white">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Past Reviews Section  */}
                   {/* use map function bcx reviews is an array of objects not a single object */}
                
                {showReviews && (
                    <div id = 'reviewsBody' className="max-w-[90vw]">
                
                     <div id="reviewContainer" className="flex flex-col gap-5">
 
                         {reviews.map((review,index)=>{
                          return (
                          <div key={index} className="flex items-center mt-5 border border-gray-500 dark:border-white rounded-lg p-2">   
                             <img className="w-20 h-20 rounded-full shadow-lg" src={review.img} alt="reviewer_image"></img>
                             <div className="p-2">
                             <h3 className="text-xl font-sans">{review.reviewerName}</h3>
                             <p className="text-md">{review.comment}</p>
                             </div>
                         </div>
                          )
                         })}
 
                     </div>
                      {/* give reviews */}
                     {!ReviewDone ?
                        <div className="flex w-[45rem] pt-5">
                         
                             <form onSubmit={handleReviewSubmit} className="w-[50vw] mt-5 border border-gray-500 dark:border-white rounded-lg p-2">
                             <textarea onChange={(e)=>setReviewText(e.target.value)} type="text" className="rounded-md p-5 bg-gray-300 dark:bg-gray-500 dark:text-white w-full" 
                                 placeholder="Write your reviews here"
                             ></textarea>
                             <button type="submit" className='px-3 bg-primary transition-all duration-200 text-white py-1
                                     rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap ' >Submit</button>
                             </form>
                        </div>
                         :
                        <div className="flex items-center mt-5 border bg-green-500 rounded-lg p-2 text-white text-md">
                             <h1>Thank you so much for your feedback</h1>
                        </div>
                     }

                    </div>
 
                    
                )}
             
                {relatedProducts.length>1 && (
                <div className="sm:container w-full flex-col pt-10">
                    {/*Related Products Carousel Header */}
                    <div>
                        <h1 className="text-center font-bold text-2xl" data-aos="fade-up">Related Products</h1>
                    

                    {/* Related Products Carousel Body */}
                    <div>
                        
                    </div>
                        <Slider {...settings}
                           
                        >
                        {
                        relatedProducts.map((data) => (
                          <div key={data.id} className='py-5'
                          onFocus={(e) => {
                            e.currentTarget.parentElement.setAttribute("aria-hidden", "false");
                        }}
                          >
                            <div  data-aos="fade-up" className='relative py-8 px-6 flex flex-col items-center justify-center gap-4 rounded-lg bg-primary/10 shadow-lg shadow-black/20 mx-4'
                                onClick={(e)=> {
                                    e.stopPropagation();
                                    showProductDetails(data.id)}}
                            >
                                
                                <div>
                                    {!imageLoaded[data.id] && <SkeletonLoader variant="product-card" />}
                                    <img src={data.img} alt={data.name} className="w-40 h-40" onLoad={() => handleImageLoad(data.id)} style={{ display: imageLoaded[data.id] ? 'block' : 'none' }} />
                                </div>
                                
                                <div >
                                    
                                    <h1 className='text-black dark:text-white font-bold text-xl mt-2'>{data.title}</h1>
                                    <p className="text-gray-500 text-sm">Price: {data.price}</p>
                                    <p className="text-gray-500 text-sm">Discount: {data.discountPercentage}%</p>
                                </div>
                                
                            </div>
                          </div>
                        ))}
                        </Slider>
                    </div>

                </div>    
                
                )}
            </div>
            </div>
        );
    }else{
        console.error(`Product with ID ${id} not found.`);
        return <div>Product not found</div>;
    }
}
export default ProductDetails;