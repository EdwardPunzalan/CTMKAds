import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

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
    const [selectedServices, setSelectedServices] = useState({});

    const toggleServiceSelection = (serviceName) => {
        setSelectedServices(prevState => ({
            ...prevState,
            [serviceName]: !prevState[serviceName]
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='font-semibold text-center text-4xl pb-4'>ADD ONS</h1>
            <h2 className='font-light text-center text-xl pb-4'>Take your detailing experience to a new level!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
                {Object.entries(servicePrices).map(([serviceName, price]) => (
                    <div
                        key={serviceName}
                        className={`relative border-2 rounded-lg p-6 mb-4 shadow-md cursor-pointer transition-all bg-transparent text-gray-900 
                      hover:shadow-lg hover:ring hover:ring-blue-500 
                      ${selectedServices[serviceName] ? 'shadow-lg shadow-blue-500/50 ring ring-blue-500' : ''}`}
                        onClick={() => toggleServiceSelection(serviceName)}
                        style={{ boxShadow: selectedServices[serviceName] ? '0 0 8px #1F51FF, 0 0 12px #1F51FF, 0 0 16px #1F51FF' : '' }}
                    >
                        <CheckCircleIcon
                            className={`w-6 h-6 absolute bottom-2 right-2 transition-all ${selectedServices[serviceName] ? 'text-green-500' : 'text-gray-400'}`}
                        />
                        <h3 className="text-xl font-semibold">{serviceName}</h3>
                        <p className="text-lg font-medium my-2">{price}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ServiceCards;
