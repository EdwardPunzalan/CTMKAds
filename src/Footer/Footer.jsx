import React from 'react';
import 'animate.css';
import fb from '../assets/fb.png';
import wap from '../assets/wap.png';
import insta from '../assets/insta.png';
import ttok from '../assets/ttok.png';

function Footer() {
    const year = new Date().getFullYear();

    const PS = {
        background: 'linear-gradient(0deg, rgba(64,162,251,1) 10%, rgba(149,0,255,1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline',
    };

    return (
        <>
            <hr />
            <footer className="bg-myblue flex flex-col text-center p-4">
                <div className='flex gap-4 justify-center py-2'>
                    <a href="#!"><img src={fb} alt="Facebook" className='w-8'/></a>
                    <a href="#!"><img src={wap} alt="WhatsApp" className='w-8'/></a>
                    <a href="#!"><img src={insta} alt="Instagram" className='w-8'/></a>
                    <a href="#!"><img src={ttok} alt="TikTok" className='w-8'/></a>
                </div>
                <hr className='my-4 w-4/12 md:w-2/12 border-solid border-black self-center'/>
                <div className="flex flex-col md:flex-row mt-2 justify-center gap-2 md:gap-1 items-center">
                    <p className='text-lg'>Copyright &copy; {year} CTMK</p>
                    <div className="hidden md:block" style={{borderLeft: '1px solid #000', height: '20px'}}></div>
                    <p className='text-lg font-semibold'>Built by</p>
                    <a href="https://edwardpunzalan.github.io/webdev/" className='text-lg font-bold' style={PS}>Punzi Studios</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
