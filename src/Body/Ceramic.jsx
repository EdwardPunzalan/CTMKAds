import React from 'react';
import LineLogo from './LineLogo';
import CeramicQuotes from './CeramicQuotes.jsx';
import CeramicBenefits from './CeramicBenefits.jsx';
import CeramicWelcome from './CeramicWelcome.jsx';
import CeramicInfo1 from './CeramicInfo1.jsx';

function Ceramic() {
  return (
    <>
      <CeramicWelcome />
      <div className="relative z-10 -mt-12 w-full animate__animated animate__fadeInUp">
        <LineLogo />
      </div>
      <CeramicInfo1 />
      <CeramicBenefits />
      <div className="px-4 md:px-16 lg:px-36 mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-myDb">Let's get it started today!</h1>
            <p className="text-md md:text-lg font-light mt-4">
              Welcome to the ultimate solution for outstanding vehicle care, CTMK! Whether you're in search of an extraordinary detailing service to elevate your car's appearance or facing challenges with paint damage, we are here to cater to your needs with unparalleled service quality.
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-myDb mt-4">How does Ceramic Coating work?</h1>
            <p className="text-md md:text-lg font-light mt-4">
              Numerous clients frequently wonder about the necessary steps to prepare a vehicle for the application of a ceramic coating. Our process begins with a thorough exterior hand wash and careful drying to guarantee a pristine surface.
            </p>
            <p className="text-md md:text-lg font-light mt-4">
              We engage in an exhaustive paint decontamination procedure, add tire shine, and clean the glass, culminating with a one-stage polish. Such thorough preparation ensures that no minute abrasive particles are sealed onto your paint’s surface.
            </p>
          </div>
          <CeramicQuotes />
        </div>
      </div>
    </>
  );
}

export default Ceramic;
