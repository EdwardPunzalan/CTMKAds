import React from 'react';
import Logo from '../assets/Logo.png';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import ttok from '../assets/ttok.png';

function FooterAbout() {
    // Function to handle "Book Now" button click
    const handleBookNowClick = (e) => {
        e.preventDefault(); // Prevent the default anchor link behavior

        // Meta Pixel tracking for the booking event
        fbq('track', 'Lead', {
            content_name: 'Book Now Footer',
            content_category: 'Booking',
        });

        // After tracking, redirect to the booking page
        window.location.href = "https://api.leadconnectorhq.com/widget/service-menu/65e358086ba2ab3555cad7f2";
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row px-4 md:px-24 pt-5 justify-between items-center'>
                <img src={Logo} className="w-24 mb-4 md:mb-0" alt="CTMK Mobile Detailing Logo" />
                <a href="https://api.leadconnectorhq.com/widget/service-menu/65e358086ba2ab3555cad7f2" 
                   className='border-2 border-[#106D8F] text-[#106D8F] hover:bg-[#1F51FF] hover:text-white p-4 px-10 rounded-xl bg-transparent hover:shadow-md hover:shadow-[#1F51FF]' 
                   onClick={handleBookNowClick}>
                    Book Now
                </a>
            </div>
            <div className='flex flex-col md:flex-row justify-between px-4 md:px-24 py-5 items-center'>
                <p className='mb-4 md:mb-0 md:w-96 font-semibold text-center md:text-left text-sm md:text-lg'>
                    Discover South Florida's premier mobile and auto detailing with CTMK Mobile Detailing. Boasting a 5-star rating from over 50 reviews, we excel in Auto Detailing and Ceramic Coating. Schedule your appointment with us today!
                </p>
                <div className='flex gap-4 justify-center'>
                    <a href="https://www.facebook.com/CTMKMobileDetailing/" target="blank_" ><img src={fb} alt="Facebook" className='w-8' /></a>
                    <a href="https://www.instagram.com/ctmk_mobiledetailing/" target="blank_" ><img src={insta} alt="Instagram" className='w-8' /></a>
                    <a href="https://www.tiktok.com/@ctmk_detailing?_t=8i1bWk4yK30&_r=1" target="blank_" ><img src={ttok} alt="TikTok" className='w-8' /></a>
                </div>
            </div>
        </div>
    );
}

export default FooterAbout;
