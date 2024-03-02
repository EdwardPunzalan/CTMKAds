import React, { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        consent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit form logic here
    };

    const year = new Date().getFullYear();

    return (
        <div className='pb-8 text-center'>
            <h1 className="text-4xl font-medium">Finalizing Your Detailing Service</h1>
            <h2 className="text-xl font-light pb-4">Please complete the following details to conclude your detailing appointment.</h2>
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-transparent border-2 rounded-lg" style={{ borderColor: '#106D8F' }}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    {/* Year, Make, Model */}
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="year">
                            Year
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="year" type="text" placeholder={year} name="year" value={formData.year} onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="make">
                            Make
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="make" type="text" placeholder="Make" name="make" value={formData.make} onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="model">
                            Model
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="model" type="text" placeholder="Model" name="model" value={formData.model} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    {/* Full Name, Phone Number, Email */}
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="fullName" type="text" placeholder="John Doe" name="fullName" value={formData.fullName} onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="phoneNumber" type="tel" placeholder="123-456-7890" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="email@example.com" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="mr-2" />
                    <label htmlFor="consent" className="text-sm text-gray-600">I consent to be contacted via text and call.</label>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormComponent;
