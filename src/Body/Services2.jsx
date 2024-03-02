import React, { useState } from 'react';
import img1 from '../assets/service2.1.png';
import img2 from '../assets/service2.2.jpeg';
import img3 from '../assets/service2.3.jpeg';

function Services2() {
    const cardBg = (x) => ({
        backgroundImage: `url(${x})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
    });

    const overlay = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(to top, #156A87, transparent)',
        zIndex: 2,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 3,
        color: 'white',
        padding: '1rem',
        height: '30rem',
        minWidth: '2rem',
        width: '23rem',
    };

    const hoverOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        opacity: 0, // Start fully transparent
        transition: 'opacity 0.5s ease-in-out', // Transition opacity
    };

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    return (
        <>
            <div className='h-screen p-16 pt-24'>
                <h1 className='text-5xl font-semibold text-myDb mt-4'>Our services</h1>
                <h2 className='font-light'>We offer top of the line quality</h2>
                <div className='flex justify-between px-4'>
                    <a href="">
                        <div
                            className='p-4 mt-6 shadow relative hover:mt-2 transition-all transition-margins'
                            style={cardBg(img1)}
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                        >
                            <div style={{ ...hoverOverlayStyle, opacity: isHovered1 ? 1 : 0 }}></div>
                            <div style={overlay}></div>
                            <div className='flex flex-col justify-end' style={contentStyle}>
                                <h1 className='text-4xl font-bold'>Mobile Detailing</h1>
                                <p className='text-sm font-semibold'>We take the shine to you, ranging from Dade to Broward county. Schedule an appointment today!</p>
                                <div className='flex gap-1 items-center'>
                                    <hr className='w-4 h-0.5 bg-blue-300 border-0 ' />
                                    <p className='text-lg font-semibold'>Learn more</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div
                            className='p-4 mt-6 shadow relative hover:mt-2 transition-all transition-margins'
                            style={cardBg(img2)}
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                        >
                            <div style={{ ...hoverOverlayStyle, opacity: isHovered2 ? 1 : 0 }}></div>
                            <div style={overlay}></div>
                            <div className='flex flex-col justify-end' style={contentStyle}>
                                <h1 className='text-4xl font-bold'>Ceramic Coating</h1>
                                <p className='text-sm font-semibold'>Protects your car's paintwork, making it more resistant to scratches and dirt.</p>
                                <div className='flex gap-1 items-center'>
                                    <hr className='w-4 h-0.5 bg-blue-300 border-0 ' />
                                    <p className='text-lg font-semibold'>Learn more</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div
                            className='p-4 mt-6 shadow relative hover:mt-2 transition-all transition-margins'
                            style={cardBg(img3)}
                            onMouseEnter={() => setIsHovered3(true)}
                            onMouseLeave={() => setIsHovered3(false)}
                        >
                            <div style={{ ...hoverOverlayStyle, opacity: isHovered3 ? 1 : 0 }}></div>
                            <div style={overlay}></div>
                            <div className='flex flex-col justify-end' style={contentStyle}>
                                <h1 className='text-4xl font-bold'>Paint Correction</h1>
                                <p className='text-sm font-semibold'>Comprehensive cleaning and restoration that makes your car look as good as new.</p>
                                <div className='flex gap-1 items-center'>
                                    <hr className='w-4 h-0.5 bg-blue-300 border-0 ' />
                                    <p className='text-lg font-semibold'>Learn more</p>
                                </div>
                            </div>
                        </div></a>
                </div>
            </div>
            <div className='py-8 flex justify-center'>
                <button className="bg-bn hover:bg-red-500 py-4 px-8 rounded-lg font-extralight drop-shadow z-10">Book Now</button>
            </div>
        </>
    );
}

export default Services2;
