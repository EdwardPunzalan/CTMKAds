import React from 'react'
import LineLogo from "./LineLogo.jsx";
import Welcome from "./Welcome.jsx"
import Services from "./Services.jsx"
import Reviews from './Reviews.jsx';
import Services2 from "./Services2.jsx"
import PriceAddOns from './PriceAddOns.jsx'
import PricePackages from './PricePackages.jsx';
import BookingForm from './BookingForm.jsx';

function Home() {
  return (
    <>
      <Welcome />
      <LineLogo/>
      <Reviews />
      <PricePackages/>
      <PriceAddOns/>
    </>
  )
}

export default Home;
