import React from 'react';

function Quotes() {
    return (
        <div className='pb-8'>
            <h1 className="text-4xl font-medium text-center">Book your appointment today!</h1>
            <h2 className="text-xl font-light pb-4 text-center">Please complete the following details to conclude your detailing appointment.</h2>
            <div className="max-w-4xl mx-auto p-6 bg-transparent border-2 rounded-lg" style={{ borderColor: '#106D8F' }}>
                <h3 className='text-2xl font-semibold text-center'>2-year Protection</h3>
                <ul>
                    <li className='text-xl font-light'>Two Doors/Sedans: Starting at $799.88</li>
                    <li className='text-xl font-light'>Suvs/Trucks: Starting at $899.88</li>
                </ul>
            </div>
            <br />
            <div className="max-w-4xl mx-auto p-6 bg-transparent border-2 rounded-lg" style={{ borderColor: '#106D8F' }}>
                <h3 className='text-2xl font-semibold text-center'>5-year Protection</h3>
                <ul>
                    <li className='text-xl font-light'>Two Doors/Sedans: Starting at $1049.88</li>
                    <li className='text-xl font-light'>Suvs/Trucks: Starting at $1199.88</li>
                </ul>
            </div>
            <br />
            <div className='flex justify-center'><a href="tel:+19549450770" className="bg-bn hover:bg-red-500 py-2 px-4 sm:py-4 sm:px-10 text-xs sm:text-sm md:text-base rounded-lg font-light drop-shadow">Call Now</a></div>
        </div>
    );
}

export default Quotes;
