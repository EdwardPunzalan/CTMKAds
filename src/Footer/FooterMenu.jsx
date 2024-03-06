import React from 'react'
import { useNavigate } from 'react-router-dom';


function FooterMenu() {
    const navigate = useNavigate();

    const navigateAndScrollToTop = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <nav className=''>
                <ul className='flex justify-evenly px-10 py-4 font-semibold text-sm md:text-lg'>
                    <li onClick={() => navigateAndScrollToTop('/')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>Home</li>
                    <li onClick={() => navigateAndScrollToTop('/About')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>About us</li>
                    <li onClick={() => navigateAndScrollToTop('/Pricing')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>Pricing</li>
                    <li onClick={() => navigateAndScrollToTop('/Contact')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>Contact us</li>
                    <li className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded'><a href='https://api.leadconnectorhq.com/widget/service-menu/65e358086ba2ab3555cad7f2'>Book Now</a></li>
                </ul>
            </nav>
            <nav className=''>
                <ul className='flex justify-evenly px-10 py-4 font-semibold text-sm md:text-lg'>
                    <li onClick={() => navigateAndScrollToTop('/MobileDetailing')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>Mobile Detailing</li>
                    <li onClick={() => navigateAndScrollToTop('/CeramicCoating')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>Cermaic Coating</li>
                    <li onClick={() => navigateAndScrollToTop('/PaintCorrection')} className='hover:bg-slate-600 hover:text-slate-100 p-2 rounded hover:cursor-pointer'>Paint Correction</li>
                </ul>
            </nav>
        </div>
    )
}

export default FooterMenu