import React, { useState } from 'react';

function VolunteerPage(){
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', age: '', location: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.age < 18) {
            alert("Volunteers must be at least 18 years old.");
            return;
        }
        console.log("Volunteer Sign-up:", formData);
        alert("Thank you for your interest! We will be in touch soon.");
        setFormData({ name: '', phone: '', email: '', age: '', location: '' });
    };

    return (
        <div className="pt-20">
            <section className="max-w-6xl mx-auto px-4 py-10 grid gap-12 md:grid-cols-2 items-center">
                
                <div>
                    <h1 className="text-5xl font-bold mb-4">Become a Hero</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Your time and skills are invaluable. Join our team of dedicated volunteers and be the change you want to see in the world.
                    </p>
                    <img 
                        src="data:image/jpeg;base64,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" 
                        alt="Volunteers working"
                        className="w-full rounded-xl shadow-2xl"
                    />
                </div>

                <div className="bg-white p-6 shadow-2xl rounded-xl">
                    <h2 className="text-2xl font-semibold text-center mb-6">Volunteer Sign-up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="age" className="block mb-1 font-medium">Age</label>
                                <input 
                                    type="number" 
                                    name="age" 
                                    id="age" 
                                    value={formData.age} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-1 font-medium">Location (City)</label>
                                <input 
                                    type="text" 
                                    name="location" 
                                    id="location" 
                                    value={formData.location} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                                />
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
                        >
                            Join Us
                        </button>
                    </form>
                </div>

            </section>
        </div>
    );
};

export default VolunteerPage;
