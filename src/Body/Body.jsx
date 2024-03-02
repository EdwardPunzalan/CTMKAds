import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Home from './Home';
import Ceramic from './Ceramic';
import MobileDetailing from './MobileDetailing';

function Body() {
  return (
    <div className="bg-myblue relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CeramicCoating" element={<Ceramic />} />
      </Routes>
      <a href="tel:+19549450770" className="bg-blue-200 rounded-full p-6 z-10 fixed bottom-8 right-8 hover:bg-blue-300 hover:animate-pulse">
        <PhoneIcon className="h-6 w-6 text-blue-500" />
      </a>
    </div>
  );
}

export default Body;
