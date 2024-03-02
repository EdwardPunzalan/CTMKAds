import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import ceramic1 from '../assets/ceramic1.png';

function CeramicInfo1() {
  return (
    <div className='flex flex-wrap justify-center mt-24 gap-4 md:gap-24 pb-36'>
        <div className='w-full md:w-4/12 px-4 md:px-0'>
          <h1 className='font-semibold text-3xl md:text-5xl text-center md:text-left'>CERAMIC COATING FROM <strong className='text-myDb'>CTMK</strong></h1>
          <div className="mt-6">
            <p className='text-md md:text-lg font-light'>At CTMK, we recognize that your vehicle represents more than mere transportation; it mirrors your unique style and pride. Our Ceramic Coating service is tailored to provide a durable barrier against pollutants, while enhancing a long-lasting shine that captures attention on every Sacramento roadway.</p>
            <p className='mt-4 text-md md:text-lg font-light'>Evolving past conventional waxes and sealants, our Ceramic Coating delivers extended protection. It forms a chemical bond with the vehicle's original paint, creating a protective layer and a water-repellent surface. The result is reduced cleaning needs, diminished staining, and a continuously radiant glow.</p>
          </div>
        </div>
        <div className='relative w-full md:w-3/6 h-64 md:h-4/6 flex justify-center items-center'>
          <img src={ceramic1} alt="Ceramic Coating" className="object-cover rounded-xl max-w-xs md:max-w-full h-full" />
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-4 flex items-center bg-white rounded-full py-1 px-4'>
            <p className='font-bold'>CTMK Certified</p>
            <CheckBadgeIcon className="w-8 h-8 text-blue-400" />
          </div>
        </div>
    </div>
  );
}

export default CeramicInfo1;
