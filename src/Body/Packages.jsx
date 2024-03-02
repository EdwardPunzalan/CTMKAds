import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const packageDetails = {
    '1': {
        Standard: {
            package: "Standard Package",
            price: "$119.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$159.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$229.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)"
        },
        Interior: {
            package: "Interior Package",
            price: "$79.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected"
        }
    },
    '2': {
        Standard: {
            package: "Standard Package",
            price: "$134.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$179.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$299.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)"
        },
        Interior: {
            package: "Interior Package",
            price: "$99.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected"
        }
    },
    '3': {
        Standard: {
            package: "Standard Package",
            price: "$154.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$229.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$369.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)"
        },
        Interior: {
            package: "Interior Package",
            price: "$119.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected"
        }
    },
    '4': {
        Standard: {
            package: "Standard Package",
            price: "$154.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$229.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$369.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)"
        },
        Interior: {
            package: "Interior Package",
            price: "$119.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected"
        }
    }
};


const vehicleTypes = [
    "2 Door Car",
    "Sedan",
    "SUV",
    "Truck"
];

const Packages = () => {
    const [selectedPackage, setSelectedPackage] = useState('1');
    const [activeContainer, setActiveContainer] = useState(null);

    const handleContainerClick = (index) => {
        setActiveContainer(index); // Set the active container to the one that was clicked
    };

    const updatePackageDetails = (packageNumber) => {
        return Object.keys(packageDetails[packageNumber]).map((subKey, index) => {
            const details = packageDetails[packageNumber][subKey];
            const servicesArray = details.services.split(',').map(service => service.trim());

            const isActive = index === activeContainer;
            const glowStyle = isActive ? { boxShadow: '0 0 10px #1F51FF, 0 0 15px #1F51FF, 0 0 20px #1F51FF', borderColor: '#1F51FF' } : {};

            return (
                <div
                    key={subKey}
                    className="bg-transparent border-2 rounded-lg p-6 mb-4 mr-4 max-w-sm shadow-md cursor-pointer transition-all"
                    style={{ ...glowStyle, borderColor: isActive ? '#1F51FF' : '#106D8F' }}
                    onClick={() => handleContainerClick(index)}
                    tabIndex={0}
                >
                    <h3 className="text-xl font-semibold" style={{ color: '#106D8F' }}>{details.package}</h3>
                    <h4 className="text-lg font-medium text-gray-900 my-2">{details.price}</h4>
                    <hr className="my-2" />
                    <ul className="list-disc pl-5 space-y-1">
                        {servicesArray.map((service) => (
                            <li key={service} className="text-gray-700 flex">
                                <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                                <span className="align-top">{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className='font-semibold text-center text-4xl pb-4'>PREMIUM PACKAGING</h1>
                <h2 className='font-light text-center text-xl pb-4'>Select your vehicle type and one of our hand-tailored packages!</h2>                
            <div className="flex justify-center flex-wrap">
                    {vehicleTypes.map((type, index) => (
                        <button
                            key={index}
                            className={`m-2 px-4 py-2 rounded-lg border-2 transition-all
                                        ${selectedPackage === `${index + 1}` ? 'bg-blue-500 text-white border-blue-500' : 'text-gray-800 border-gray-300'}
                                        `}
                            style={{ borderColor: selectedPackage === `${index + 1}` ? '' : '#106D8F' }}
                            onClick={() => setSelectedPackage(`${index + 1}`)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-center flex-wrap">
                {updatePackageDetails(selectedPackage)}
            </div>
        </div>
    );
};

export default Packages;