import {useState} from 'react';
import Logo from '../assets/Logo.png';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import ttok from '../assets/ttok.png';
import Modal from 'react-modal';
import LeadForm from '../Body/LeadForm.jsx';
import { XMarkIcon } from '@heroicons/react/24/solid';

Modal.setAppElement('#root');


function FooterAbout() {
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
        <div>
            <div className='flex flex-col md:flex-row px-4 md:px-24 pt-5 justify-between items-center'>
                <img src={Logo} className="w-24 mb-4 md:mb-0" alt="CTMK Mobile Detailing Logo" />
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
