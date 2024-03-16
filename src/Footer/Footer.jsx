import React from 'react';
import 'animate.css';
import FooterMenu from './FooterMenu';
import FooterAbout from './FooterAbout';

function Footer() {
    const year = new Date().getFullYear();

    const PS = {
        background: 'linear-gradient(0deg, rgba(158,255,149,1) 0%, rgba(255,255,255,1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline',
    };

    // Overlay style adjusted for full coverage
    const overlay = {
        position: 'absolute',
        top: 0, // Starts from the top of the footer
        left: 0,
        right: 0,
        height: '100%',
        background: 'linear-gradient(to top, #156A87, transparent)',
        zIndex: -1, // Ensure it's behind the footer content
    };

    // Footer style for relative positioning
    const footerStyle = {
        position: 'relative',
        zIndex: 0, // Higher than the overlay to ensure content is clickable/interactive
    };

    return (
        <footer style={footerStyle} className="bg-myblue flex flex-col text-center p-4">
            {/* Overlay inside the footer for the background effect */}
            <div style={overlay}></div>
            <hr />
            <FooterAbout />
            <hr className='my-4 w-9/12 md:w-10/12 border-solid border-black self-center' />
            <div className="flex flex-col md:flex-row mt-2 justify-center gap-2 md:gap-1 items-center">
                <p className='text-sm md:text-lg'>Copyright &copy; {year} CTMK</p>
                <div className="hidden md:block" style={{ borderLeft: '1px solid #000', height: '20px' }}></div>
                <div className='flex gap-1'>
                    <p className='text-lg font-semibold'>Built by</p>
                    <a href="https://punzi-studios.vercel.app/" className='text-lg font-bold' style={PS}>Punzi Studios</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
