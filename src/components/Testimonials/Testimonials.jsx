
import React from 'react';
import Slider from 'react-slick';

  const TestimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Umar Khan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Amir Khan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Ahmed Suhail",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

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
  
const Testimonials = () => {
    return(
      <div className=' dark:bg-gray-800 dark:text-white bg-white'>
        <div className="py-10">
            <div className="container">
                {/* Header Section */}
                <div className="container text-center mb-10">
                <p className="text-md text-secondary" data-aos="fade-up">What our customers are saying</p>
                <h1 className=" text-black dark:text-white text-3xl font-bold aos-init aos-animate" data-aos="fade-up">Testimonials</h1>
                <p className="text-slate-400 text-xs" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
                
                {/* Testimonials Cards */}
                <div className='px-4' data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                          <div key={data.id} className='py-6'>
                            <div className='relative py-8 px-6 flex flex-col gap-4 rounded-lg bg-primary/10 shadow-lg shadow-black/20 mx-4'>
                                
                                <div>
                                    <img src={data.img} alt={data.name} className="rounded-full w-20 h-20" />
                                </div>
                                
                                <div >
                                    <p className="text-gray-500 text-sm">{data.text}</p>
                                    <h1 className='text-black dark:text-white font-bold text-xl mt-2'>{data.name}</h1>
                                </div>
                                
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                
                            </div>
                          </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
      </div>
    );
}
export default Testimonials;