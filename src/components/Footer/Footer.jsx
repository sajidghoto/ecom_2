import React from 'react';
import footer_logo from '../../assets/logo.png'; 
import Banner from '../../assets/website/footer-pattern.png';

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
}


const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  
const Footer = () => {
  return (
    <div  style={BannerImg} >
    <div className=" text-white">
      <div className='container' data-aos="zoom-in" data-aos-duration="1000">
       
        {/* Company Details */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 pt-10 sm:pb-10'>
        
        <div className='sm:py-8 px-4'>
            <div className='flex items-center justify-left gap-4'>
            <img src={footer_logo} alt="Logo" className='w-12 h-12' />
            <h1 className='text-3xl font-bold'>Shopsy</h1>
            </div>
            <h1 className='text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</h1>
        </div>
        {/* Footer Links */}
        <div className='col-span-2'>
        <div className='grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-1 gap-4'>
            <div className='py-8 px-4'>
                <div>
                    <h1 className='text-xl sm:text-xl sm:text-left text-justify font-bold mb-3 '>Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {FooterLinks.map((link, index) => (
                            <li key={index} className='curser-pointer text-gray-200 hover:text-primary hover:translate-x-1 duration-200'>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className='py-8 px-4'>
                <div>
                    <h1 className='text-xl sm:text-xl sm:text-left text-justify font-bold mb-3'>Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {FooterLinks.map((link, index) => (
                            
                            <li key={index} className='curser-pointer text-gray-200 hover:text-primary hover:translate-x-1 duration-200'>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className='sm:py-8 px-4'>
                <div className='flex items-center justify-center gap-4'>
                    <FaFacebook className='w-8 h-8'/>
                    <FaInstagram className='w-8 h-8'/>
                    <FaLinkedin className='w-8 h-8'/>
                </div>
                <div className='flex items-center justify-center gap-2 mt-4'>
                    <FaLocationArrow className='w-8 h-8'/>
                    <p>Sindh, Pakistan</p>
                </div>
                <div className='flex items-center justify-center gap-2 mt-4'>
                    <FaMobileAlt className='w-8 h-8'/>
                    <p>+92 1234567890</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}
export default Footer;