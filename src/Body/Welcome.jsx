import React, { useState } from 'react';
import videoSource from '../assets/About.mp4';
import 'animate.css';
import Modal from 'react-modal';
import LeadForm from './LeadForm.jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';

Modal.setAppElement('#root');

function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBookNowClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        width: '80vw',
        maxWidth: '600px',
        height: 'auto',
        maxHeight: '95vh',
        zIndex: 1000,
        border: '4px solid rgba(129, 140, 248)',
        padding: '20px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        zIndex: 999,
    }
};

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        playsInline
        muted
        loop
        id="video"
        className="w-full h-full object-cover absolute inset-0 opacity-30"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="pt-48 px-4 sm:pl-24 relative animate__animated animate__fadeInUp">
        <div className="pt-2 text-4xl sm:text-5xl md:text-6xl flex flex-wrap gap-4 font-semibold mt-4">
          <p className='text-slate-800'>CTMK</p>
          <div className="text-myDb">Mobile Detailing</div>
        </div>
        <p className="py-2 text-sm sm:text-lg md:text-xl font-light w-full sm:w-10/12 md:w-7/12 text-slate-800">
          Experience the best in mobile & auto detailing in South Florida with CTMK Mobile Detailing. Rated 5-stars with 50+ reviews, we specialize in Auto Detailing and Ceramic Coating. Book us today!
        </p>
        <p className="pb-4 sm:pb-10 pr-0 md:pr-20 lg:pr-96 text-base md:text-lg lg:text-xl font-medium text-myDb">
          Trusted with over 50+ 5 Star Google Reviews.
        </p>
        <div className="flex gap-4 sm:flex-row flex-col">
          <button
            onClick={handleBookNowClick}
            className="h-12 text-center sm:h-auto bg-bn hover:bg-red-500 py-2 px-4 sm:py-4 sm:px-8 md:px-10 lg:py-4 lg:px-12 rounded-lg font-light drop-shadow text-lg sm:text-sm md:text-base lg:text-lg transition ease-in-out duration-150">
            Get In Touch
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <button onClick={closeModal} style={{ float: 'right' }}><XMarkIcon className="h-6 w-6" /></button>
            <LeadForm />
          </Modal>
          <a href="tel:+19549450770" className="h-12 text-center sm:h-auto bg-blue-200 bg-opacity-60 hover:bg-blue-500 py-2 px-2 sm:py-4 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg font-light drop-shadow text-lg sm:text-sm md:text-base lg:text-lg transition ease-in-out duration-150">
            Give Us A Call
          </a>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '25%',
        background: 'linear-gradient(to bottom, transparent, #EBF8F8)',
        zIndex: 2,
      }}></div>
    </div>
  );
}

export default Welcome;
