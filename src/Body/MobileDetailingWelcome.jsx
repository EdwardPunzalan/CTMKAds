import React from 'react';
import videoSource from '../assets/MobileDetailing.mp4';

function MobileDetailingWelcome() {
  return (
    <div className="relative" style={{ height: '40rem' }}>
        <video
          autoPlay
          muted
          loop
          id="video"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="pt-48 relative animate__animated animate__fadeInUp">
          <div className='flex justify-center'>
            <button className="bg-blue-200 py-2 px-4 sm:px-20 md:px-32 text-xs sm:text-sm md:text-sm font-extralight rounded-full bg-opacity-70 drop-shadow-xl hover:bg-blue-500 transition-colors duration-300">
              Book Now →
            </button>
          </div>
          <div className="pt-2 text-4xl md:text-5xl lg:text-6xl flex gap-4 font-semibold justify-center drop-shadow">
            <p className='text-white'>Mobile</p>
            <div className="text-myDb text-center">Detailing</div>
          </div>
          <p className="py-10 px-8 md:px-20 lg:px-96 text-base md:text-lg lg:text-xl font-light text-white text-center">
            Explore our range of mobile detailing packages. Complete the form to receive a callback from our specialists and discover the ideal package for your needs.
          </p>
        </div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '25%',
          background: 'linear-gradient(to bottom, transparent, #EBF8F8)',
          zIndex: 1,
        }}></div>
      </div>
  )
}

export default MobileDetailingWelcome;
