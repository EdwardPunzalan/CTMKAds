import React, { useState } from 'react';

const servicePrices = {
    "3 Month Sealant": "$29.98",
    "Clay Bar / Paint Decontamination": "$109.98",
    "Dashboard Protect / Shine": "$24.98",
    "Engine Bay Cleaning": "$49.98",
    "Leather Condition": "$24.98",
    "Trunk Vacuum": "$14.98",
    "Shampoo": "$24.98",
    "Stain Removal": "$69.98",
    "Interior Steam Cleaning": "$69.98",
    "Headlight Restoration": "$49.98",
    "Odor Elimination": "$49.98",
    "Exterior Polish": "$349.98",
    "Chrome Polish": "$24.98"
};

function ServiceCards() {
    // Track the index of the card currently hovered over
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='font-semibold text-center text-4xl pb-4'>ADD ONS</h1>
            <h2 className='font-light text-center text-xl pb-4'>Take your detailing experience to a new level!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
                {Object.entries(servicePrices).map(([serviceName, price], index) => (
                    <div
                        key={serviceName}
                        onMouseEnter={() => setHoverIndex(index)} // Set this card as hovered
                        onMouseLeave={() => setHoverIndex(null)} // Reset hover when not hovered
                        className="relative border-2 rounded-2xl p-6 mb-4 shadow-md cursor-pointer transition-all bg-transparent text-gray-900 hover:shadow-lg hover:border-blue-500 hover:ring hover:ring-blue-500/50"
                        style={{
                            boxShadow: hoverIndex === index ? '0 0 10px #1F51FF, 0 0 15px #1F51FF, 0 0 20px #1F51FF' : 'none',
                            borderColor: '#106D8F',
                        }}
                    >
                        <a href="https://api.leadconnectorhq.com/widget/service-menu/65e358086ba2ab3555cad7f2" target='blank_'>
                        <h3 className="text-xl font-semibold">{serviceName}</h3>
                        <p className="text-lg font-medium my-2">{price}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceCards;
