import React, { useState } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Modal from 'react-modal';
import LeadForm from './LeadForm.jsx'

Modal.setAppElement('#root');

const packageDetails = {
    '1': {
        Interior: {
            package: "Interior Package",
            price: "$79.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected",
            wash: "(Interior only)"
        },
        Standard: {
            package: "Standard Package",
            price: "$119.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)",
            wash: "(Interior + Exterior)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$159.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)",
            wash: "(Interior + Exterior)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$229.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)",
            wash: "(Interior + Exterior)"
        }
    },
    '2': {
        Interior: {
            package: "Interior Package",
            price: "$99.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected",
            wash: "(Interior only)"
        },
        Standard: {
            package: "Standard Package",
            price: "$134.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)",
            wash: "(Interior + Exterior)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$179.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)",
            wash: "(Interior + Exterior)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$299.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)",
            wash: "(Interior + Exterior)"
        }
    },
    '3': {
        Interior: {
            package: "Interior Package",
            price: "$119.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected",
            wash: "(Interior only)"
        },
        Standard: {
            package: "Standard Package",
            price: "$154.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)",
            wash: "(Interior + Exterior)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$229.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)",
            wash: "(Interior + Exterior)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$369.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)",
            wash: "(Interior + Exterior)"
        }
    },
    '4': {
        Interior: {
            package: "Interior Package",
            price: "$119.88",
            services: "Shampoo & Stain removal, Windows cleaned in and out, Clean door jams & Trunk Jams, Interior vacuum, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Interior shined & Protected",
            wash: "(Interior only)"
        },
        Standard: {
            package: "Standard Package",
            price: "$154.88",
            services: "Exterior Foam Bath, Chamois Hand dry, Rims cleaned & Shined, Tire scrub & Tire Shine, Windows in and out, Clean door & trunk jams, Interior vacuum, Thorough interior wipe down of all cracks and crevices, Spray wax shine (1 month Protection)",
            wash: "(Interior + Exterior)"
        },
        Supreme: {
            package: "Supreme Package",
            price: "$229.88",
            services: "Dashboard protect & shine, Exterior foam bath, Chamois hand dry, (spot) Removal, Rims Cleaned and shined, Tire scrub & tire shine, Windows cleaned in and out, Clean door & trunk shine, Trunk vacuum, Thorough interior wipe down of all cracks and crevices, Clay Bar & Wax Sealant (4 Month protection)",
            wash: "(Interior + Exterior)"
        },
        Extreme: {
            package: "Extreme Package",
            price: "$369.88",
            services: "Chrome Polish, Clay bar & paint decontamination, Full interior shined & Protected, Exterior foam bath, Chamois hand dry, Rims cleaned & Shined, Tire scrub & Tire shine, Windows cleaned in and out, Door jams & Trunk jams, Interior vacuum, Trunk vacuum, Thorough wipe down of all cracks and crevices, Black Trim restore & protect, Ceramic Wax Sealant (8-12 Month Protection)",
            wash: "(Interior + Exterior)"
        }
    }
};


const packageUrls = {
    Standard: "https://api.leadconnectorhq.com/widget/booking/xZDBRbVhHQPfyoNlTAbl?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true",
    Supreme: "https://api.leadconnectorhq.com/widget/booking/eIt8qSROhAiqSKZwu0W1?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true",
    Extreme: "https://api.leadconnectorhq.com/widget/booking/ElejysSs0DQjHFo8vI7e?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true",
    Interior: "https://api.leadconnectorhq.com/widget/booking/xonxuP3aQPvWxRooAn5Q?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Book+Today!&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true"
};

const vehicleTypes = ["2 Door Car", "Sedan", "SUV", "Truck"];

const Packages = () => {
    const [selectedPackage, setSelectedPackage] = useState('1');
    const [hoverIndex, setHoverIndex] = useState(null); // Track hover state
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
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

    const handlePackageClick = (packageName) => {
        window.open(packageUrls[packageName], '_blank');

        fbq('track', 'Lead', {
            content_name: 'Package Booking',
            content_category: 'Package Selection',
            package_name: packageName
        });
    };


    const updatePackageDetails = (packageNumber) => {
        return Object.keys(packageDetails[packageNumber]).map((packageKey, index) => {
            const details = packageDetails[packageNumber][packageKey];
            return (
                <div
                    key={packageKey}
                    className="bg-transparent border-2 rounded-2xl p-6 mb-4 mr-4 max-w-sm shadow-md cursor-pointer transition-all flex flex-col justify-between gap-4"
                    style={{
                        boxShadow: hoverIndex === index ? '0 0 10px #1F51FF, 0 0 15px #1F51FF, 0 0 20px #1F51FF' : 'none',
                        borderColor: '#106D8F',
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <div>
                        <h3 className="text-xl font-semibold" style={{ color: '#106D8F' }}>{details.package}</h3>
                        <p className='text-lg'>{details.wash}</p>
                        <hr className="my-2" />
                        <ul className="list-disc pl-5 space-y-1">
                            {details.services.split(', ').map((service, serviceIndex) => (
                                <li key={serviceIndex} className="text-gray-700 flex align-top">
                                    <CheckCircleIcon className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                    <span className="align-middle text-base lg:text-sm pl-4 pb-2">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={openModal}
                        className="w-1/2 self-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Learn More
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
            );
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className='font-semibold text-center text-4xl pb-4'>PREMIUM PACKAGING</h1>
                <h2 className='font-light text-center text-xl pb-4'>Select from one of our hand-tailored packages to suit your needs!</h2>
            </div>
            <div className="flex justify-center flex-wrap">
                {vehicleTypes.map((type, index) => (
                    <button
                        key={index}
                        className={`m-2 px-4 py-2 rounded-lg border-2 transition-all
                            ${selectedPackage === `${index + 1}` ? 'bg-blue-500 text-white border-blue-500' : 'text-gray-800 border-gray-300'}
                        `}
                        onClick={() => setSelectedPackage(`${index + 1}`)}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <div className="flex justify-center items-center lg:items-stretch flex-col lg:flex-row">
                {updatePackageDetails(selectedPackage)}
            </div>
        </div>
    );
};

export default Packages;