import React from 'react'
import LineLogo from "./LineLogo.jsx";
import Welcome from "./Welcome.jsx"
import Reviews from './Reviews.jsx';
import PriceAddOns from './PriceAddOns.jsx'
import PricePackages from './PricePackages.jsx';

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
