import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import MobileDetailing1 from '../assets/MobileDetailing1.png';

function MobileDetailingInfo1() {
  return (
    <div className='flex flex-wrap justify-center mt-24 gap-4 md:gap-24 pb-36'>
        <div className='w-full md:w-4/12 px-4 md:px-0'>
          <h1 className='font-bold text-3xl md:text-5xl text-center md:text-left'>MOBILE DETAILING FROM <strong className='text-myDb'>CTMK</strong></h1>
          <div className="mt-6">
            <p className='text-md md:text-lg font-medium'>In Broward and Miami-Dade, the busy lifestyles of our residents require a blend of convenience and excellence. At CTMK, we present the epitome of convenience through our Mobile Detailing service. Whether you're at home, work, or any location within our service range, our renowned detailing expertise comes directly to you.</p>
            <p className='mt-4 text-md md:text-lg font-medium'>Our Mobile Detailing service extends beyond mere exterior cleaning. We go the extra mile, providing comprehensive interior vacuuming, steam cleaning, polishing, and waxing. Utilizing premium products such as Max Shine and P&S, we ensure every detail, corner, and crevice of your vehicle receives meticulous care.</p>
          </div>
        </div>
        <div className='relative w-full md:w-3/6 h-64 md:h-4/6 flex justify-center items-center'>
          <img src={MobileDetailing1} alt="Ceramic Coating" className="object-cover rounded-xl max-w-xs md:max-w-full h-full" />
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-4 flex items-center bg-white rounded-full py-1 px-4'>
            <p className='font-bold'>CTMK Certified</p>
            <CheckBadgeIcon className="w-8 h-8 text-blue-400" />
          </div>
        </div>
    </div>
  );
}

export default MobileDetailingInfo1;
