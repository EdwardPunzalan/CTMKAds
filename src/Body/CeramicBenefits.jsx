import React from 'react';
import endurance from '../assets/security.png';
import uv from '../assets/uv.png';
import eco from '../assets/eco.png';
import rain from '../assets/rain.png';

function CeramicBenefits() {
  return (
    <div className="px-4 py-12">
      <h1 className='text-center text-3xl md:text-4xl font-semibold'>Benefits of Ceramic Coating</h1>
      <h2 className='text-center text-lg md:text-xl font-light mt-4'>Protect what's yours!</h2>
      <div className='flex flex-wrap justify-center gap-4 md:gap-8 p-4 md:p-24'>
        <div className='w-full md:w-1/5 flex flex-col items-center md:items-start'>
          <img src={uv} alt="UV Protection Icon" className='w-16 pb-8' />
          <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>UV Protection</h2>
          <p className='text-center md:text-left font-light'>Protect your car's paint from harmful UV rays, preventing oxidation and premature fading.</p>
        </div>
        <div className='w-full md:w-1/5 flex flex-col items-center md:items-start'>
          <img src={eco} alt="Eco Icon" className='w-16 pb-8' />
          <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>Easy to clean</h2>
          <p className='text-center md:text-left font-light'>Dirt and grime find it hard to stick on a ceramic-coated surface, making cleaning a breeze.</p>
        </div>
        <div className='w-full md:w-1/5 flex flex-col items-center md:items-start'>
          <img src={endurance} alt="Endurance Icon" className='w-16 pb-8' />
          <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>Endurance</h2>
          <p className='text-center md:text-left font-light'>The hydrophobic nature of ceramic coatings ensures your vehicle maintains its luster for longer.</p>
        </div>
        <div className='w-full md:w-1/5 flex flex-col items-center md:items-start'>
          <img src={rain} alt="Rain Icon" className='w-16 pb-8' />
          <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>Chemical Resistance</h2>
          <p className='text-center md:text-left font-light'>Guard against acidic contaminants, bird droppings, and tree sap which can damage the paint.</p>
        </div>
      </div>
    </div>
  );
}

export default CeramicBenefits;
